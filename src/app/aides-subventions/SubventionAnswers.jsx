import React from "react";

function SubventionAnswers() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-wide text-gray-200">
            Aides & Subventions
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Voici une liste de pépites dont vous pouvez tirer profit pour lancer ou financer votre projet:
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Crédit d'Impôt Recherche (CIR)",
                description:
                  "Le Crédit d'Impôt Recherche est un dispositif fiscal permettant aux entreprises de bénéficier d'un crédit d'impôt sur les dépenses de recherche et développement (R&D). Il peut couvrir jusqu'à 30% des dépenses éligibles, ce qui peut représenter un soutien financier considérable pour vos projets innovants.",
              },
              {
                number: "02",
                title: "Aides de Bpifrance",
                description:
                  "Bpifrance offre une gamme variée de financements et d'aides pour les entreprises de toutes tailles.",
                subpoints: [
                  {
                    title: "Prêts à l'innovation",
                    text: "pour financer des projets innovants à tous les stades de développement.",
                  },
                  {
                    title: "Aides à l'innovation",
                    text: "subventions et avances remboursables pour les projets de recherche, développement et innovation.",
                  },
                ],
              },
              {
                number: "03",
                title: "Le Fonds pour la Société Numérique (FSN)",
                description:
                  "Le FSN finance des projets visant à développer les infrastructures numériques et les services numériques innovants. Les entreprises peuvent obtenir des subventions ou des prêts pour des projets répondant à ces critères.",
              },
              {
                number: "04",
                title: "Subventions Régionales",
                description:
                  "Les régions françaises offrent également des subventions pour soutenir les projets informatiques et numériques. Les critères d'éligibilité et les montants varient selon les régions, mais ces subventions peuvent représenter une aide précieuse.",
              },
            ].map((item, index) => (
              <div key={index} className="border-b pb-6">
                <h6 className="text-2xl font-bold text-gray-200">
                  <span className="text-green-600">{item.number}.</span> {item.title}
                </h6>
                <p className="mt-4 text-gray-300 text-xl ">{item.description}</p>
                {item.subpoints && (
                  <ul className="mt-4 space-y-2">
                    {item.subpoints.map((point, i) => (
                      <li key={i} className="text-gray-300 text-xl ">
                        <span className="font-bold">{point.title}:</span> {point.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {[
              {
                number: "05",
                title: "Programme Horizon Europe",
                description:
                  "Horizon Europe est le programme cadre de l'Union Européenne pour la recherche et l'innovation. Il propose des financements pour des projets de recherche et d'innovation dans divers domaines y compris IT et TIC.",
              },
              {
                number: "06",
                title: "Aide à la transition numérique",
                description: "Diverses aides sont disponibles pour accompagner les PME dans leur transition numérique.",
                subpoints: [
                  {
                    title: "Le Chèque France Num",
                    text: "une aide forfaitaire pour financer des dépenses liées à la transformation numérique des entreprises.",
                  },
                  {
                    title: "Diagnostics numériques",
                    text: "des aides pour réaliser des audits et diagnostics de vos besoins numériques.",
                  },
                ],
              },
              {
                number: "07",
                title: "Prêts Bancaires et Financements Privés",
                description:
                  "Outre les aides publiques, les entreprises peuvent également se tourner vers des prêts bancaires et des financements privés pour soutenir leurs projets informatiques. De nombreuses banques et institutions financières offrent des solutions de financement adaptées aux besoins des entreprises technologiques.",
              },
            ].map((item, index) => (
              <div key={index} className="border-b pb-6">
                <h6 className="text-2xl font-semibold text-gray-200">
                  <span className="text-green-600">{item.number}.</span> {item.title}
                </h6>
                <p className="mt-4 text-gray-300 text-xl ">{item.description}</p>
                {item.subpoints && (
                  <ul className="mt-4 space-y-2">
                    {item.subpoints.map((point, i) => (
                      <li key={i} className="text-gray-300 text-xl ">
                        <span className="font-bold">{point.title}:</span> {point.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubventionAnswers;
