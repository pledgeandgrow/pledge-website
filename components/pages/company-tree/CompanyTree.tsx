"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type TreeNode = {
  id: string;
  name: string;
  title: string;
  role?: string;
  children?: TreeNode[];
  expanded?: boolean;
};

export default function CompanyTree() {
  const initialTree: TreeNode[] = [
    {
      id: 'board',
      name: 'Board of Directors',
      title: 'Strategic Leadership',
      expanded: true,
      children: [
        {
          id: 'chairman1',
          name: 'Mehdi BEREL',
          title: 'Chairman',
          role: 'Chief Executive Officer',
          children: []
        },
        {
          id: 'chairman2',
          name: 'Shihab BEREL',
          title: 'Chairman',
          role: 'Chief Technology Officer',
          children: []
        },
        {
          id: 'chairman3',
          name: 'Ilyas BEREL',
          title: 'Chairman',
          role: 'Chief Financial Officer',
          children: []
        },
        {
          id: 'member1',
          name: 'Noah PLA',
          title: 'Board Member',
          role: 'Chief Operating Officer',
          children: []
        },
        {
          id: 'member2',
          name: 'Maxime NEAU',
          title: 'Board Member',
          role: 'Ambassador',
          children: []
        },
        {
          id: 'member3',
          name: 'Zakaria HADRAOUI',
          title: 'Board Member',
          role: 'Chief Information Officer',
          children: []
        },
        {
          id: 'member5',
          name: 'Mazen ISMAIL',
          title: 'Board Member',
          role: 'Chief Blockchain Officer',
          children: []
        }
      ]
    },
    {
      id: 'staff',
      name: 'Staff',
      title: 'Operations Team',
      expanded: true,
      children: [
        {
          id: 'team1',
          name: 'Louis JUNQUA',
          title: 'Chargé commercial',
          children: []
        },
        {
          id: 'team2',
          name: 'Lyna',
          title: 'Chargé de communication',
          children: []
        },
        {
          id: 'team3',
          name: 'Mehdi OUALI',
          title: 'Chargé de réseaux sociaux',
          children: []
        },
        {
          id: 'team4',
          name: 'Brandon MERYEL',
          title: 'Modérateur Discord',
          children: []
        },
        {
          id: 'team5',
          name: 'Rayane BEDRANI',
          title: 'Business Développeur',
          children: []
        }
      ]
    }
  ];

  const [treeData, setTreeData] = useState<TreeNode[]>(initialTree);

  const toggleNode = (nodeId: string) => {
    const updateNode = (nodes: TreeNode[]): TreeNode[] => {
      return nodes.map(node => {
        if (node.id === nodeId) {
          return { ...node, expanded: !node.expanded };
        }
        if (node.children) {
          return { ...node, children: updateNode(node.children) };
        }
        return node;
      });
    };

    setTreeData(updateNode(treeData));
  };

  const expandAll = () => {
    const expandNodes = (nodes: TreeNode[]): TreeNode[] => {
      return nodes.map(node => {
        if (node.children && node.children.length > 0) {
          return { 
            ...node, 
            expanded: true, 
            children: expandNodes(node.children) 
          };
        }
        return node;
      });
    };

    setTreeData(expandNodes(treeData));
  };

  const collapseAll = () => {
    const collapseNodes = (nodes: TreeNode[]): TreeNode[] => {
      return nodes.map(node => {
        if (node.children && node.children.length > 0) {
          return { 
            ...node, 
            expanded: false, 
            children: collapseNodes(node.children) 
          };
        }
        return node;
      });
    };

    setTreeData(collapseNodes(treeData));
  };

  const renderTree = (nodes: TreeNode[], level = 0) => {
    return nodes.map((node) => (
      <div key={node.id} style={{ paddingLeft: `${level * 20}px` }}>
        <div 
          className={`flex items-center p-2 my-1 rounded-md hover:bg-accent/50 transition-colors ${level === 0 ? 'bg-primary/10' : ''}`}
        >
          {node.children && node.children.length > 0 ? (
            <button 
              onClick={() => toggleNode(node.id)} 
              className="mr-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={node.expanded ? "Collapse" : "Expand"}
            >
              {node.expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          ) : (
            <span className="w-6 mr-2"></span>
          )}
          <div>
            <div className="font-medium">{node.name}</div>
            <div className="text-xs text-muted-foreground">{node.title}</div>
            {node.role && <div className="text-xs text-primary">{node.role}</div>}
          </div>
        </div>
        {node.expanded && node.children && node.children.length > 0 && (
          <div className="border-l-2 border-border ml-3 pl-3">
            {renderTree(node.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Company Organizational Structure</h1>
            <p className="text-muted-foreground text-lg">
              Explore our company's organizational structure and leadership hierarchy.
            </p>
          </div>
          
          <div className="flex justify-between mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={expandAll}
              className="flex items-center gap-2"
            >
              <ChevronDown size={16} />
              Expand All
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={collapseAll}
              className="flex items-center gap-2"
            >
              <ChevronRight size={16} />
              Collapse All
            </Button>
          </div>
          
          <div className="bg-card border border-border rounded-lg shadow-sm p-6 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <Users size={20} />
              <h2 className="text-xl font-bold">Organization Chart</h2>
            </div>
            <div className="mt-4">
              {renderTree(treeData)}
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/about">
                Back to About Page
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
