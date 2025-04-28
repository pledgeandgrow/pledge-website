"use client";

import { motion } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Sample financial data
const revenueData = [
  { year: '2020', revenue: 1.2 },
  { year: '2021', revenue: 2.8 },
  { year: '2022', revenue: 4.5 },
  { year: '2023', revenue: 7.2 },
  { year: '2024', revenue: 9.8 },
  { year: '2025', revenue: 12.5, projected: true },
];

const growthData = [
  { year: '2020', clients: 15, employees: 25 },
  { year: '2021', clients: 45, employees: 60 },
  { year: '2022', clients: 85, employees: 110 },
  { year: '2023', clients: 140, employees: 160 },
  { year: '2024', clients: 210, employees: 200 },
  { year: '2025', clients: 280, employees: 250, projected: true },
];

const marketShareData = [
  { segment: 'Web Development', share: 28 },
  { segment: 'Mobile Apps', share: 22 },
  { segment: 'Cloud Solutions', share: 18 },
  { segment: 'AI Services', share: 15 },
  { segment: 'Digital Marketing', share: 10 },
  { segment: 'Other Services', share: 7 },
];

export default function FinancialHighlights() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');
  
  const textColor = isDark ? '#ffffff' : '#000000';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const primaryColor = '#0ea5e9'; // Tailwind sky-500
  const secondaryColor = '#8b5cf6'; // Tailwind violet-500

  return (
    <section id="financial-highlights" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Financial Highlights
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our financial performance and growth trajectory. Our strong financial foundation and consistent growth make us an attractive investment opportunity.
          </p>
        </motion.div>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
            <TabsTrigger value="market">Market Share</TabsTrigger>
          </TabsList>
          
          <TabsContent value="revenue" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Annual Revenue (in millions USD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={revenueData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                        <XAxis dataKey="year" tick={{ fill: textColor }} />
                        <YAxis tick={{ fill: textColor }} />
                        <Tooltip 
                          formatter={(value) => [`$${value}M`, 'Revenue']}
                          contentStyle={{ 
                            backgroundColor: isDark ? '#1f2937' : '#ffffff',
                            color: textColor,
                            border: `1px solid ${gridColor}`
                          }}
                        />
                        <Bar 
                          dataKey="revenue" 
                          fill={primaryColor} 
                          radius={[4, 4, 0, 0]}
                          name="Revenue"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * 2025 figures are projected based on current growth rates
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="growth" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Client & Employee Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={growthData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                        <XAxis dataKey="year" tick={{ fill: textColor }} />
                        <YAxis tick={{ fill: textColor }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: isDark ? '#1f2937' : '#ffffff',
                            color: textColor,
                            border: `1px solid ${gridColor}`
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="clients" 
                          stroke={primaryColor} 
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                          name="Clients"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="employees" 
                          stroke={secondaryColor} 
                          strokeWidth={2}
                          name="Employees"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * 2025 figures are projected based on current growth rates
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="market" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Market Share by Service Segment (%)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={marketShareData}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                        <XAxis type="number" tick={{ fill: textColor }} />
                        <YAxis 
                          dataKey="segment" 
                          type="category" 
                          tick={{ fill: textColor }} 
                          width={80}
                        />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Market Share']}
                          contentStyle={{ 
                            backgroundColor: isDark ? '#1f2937' : '#ffffff',
                            color: textColor,
                            border: `1px solid ${gridColor}`
                          }}
                        />
                        <Bar 
                          dataKey="share" 
                          fill={primaryColor} 
                          radius={[0, 4, 4, 0]}
                          name="Market Share"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
