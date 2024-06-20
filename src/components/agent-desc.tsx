import AgentHeaders from "./agent-headers"

const AgentDesc = () => {
  const desc = `EC21 has been created in September 2017 as the result of the proactive
          and innovative collaboration between its three founding partners:
          European Capital Partners S.A. (Luxembourg), Colombo Group
          (Switzerland) and Twenty First Capital S.A.S. (France). Our
          Shareholders European Capital Partners (Luxembourg) S.A. European
          Capital Partners is an independent Luxembourg based asset management
          boutique founded in 2010, jointly owned by the Edison Group and Léon
          Kirch. Specialist in European Value Equities, European Capital
          Partners aims at providing its investors with an active, flexible,
          high conviction, benchmark agnostic and long-term oriented approach
          that has proven its efficiency under different market conditions.
          Colombo Wealth Management S.A. Colombo Wealth Management S.A. is an
          independent Swiss Wealth Management Boutique and has been active for
          more than 40 years with offices in Lugano, Zurich and Geneva. Through
          its subsidiary, Heron Asset Management, it provides institutional and
          private clients with funds and products in various asset classes.
          Heron has an active market approach that aims to create performance
          for its clients regardless of market conditions. Twenty First Capital
          S.A.S Twenty First Capital S.A.S was created in 2011 in Paris to meet
          the new challenges and needs of institutional and private investors
          seeking innovative ideas and developing products capable to deliver
          superior results in the current challenging investment environment.
          Thanks to its multi-expert model and its multi-assets approach, Twenty
          First offers a range of high performing funds covering major asset
          classes and strives to bring together the leading experts and the best
          talent in the industry. The three companies together manage
          approximately EUR 4.5 Billion (as of December 31st 2017). Contact:
          Tel.: +352 28 68 15 10 E-mail: info@ec21.lu`

  return (
    <div className="w-full">
      <AgentHeaders />
      <div className="mt-1.5 flex flex-col gap-1.5 ">
        <h4 className="text-xs text-gray-light-11">Company Description</h4>
        <div className="line-clamp-[10] text-justify text-sm text-gray-light-12 hover:line-clamp-none">
          {desc}
        </div>

        <h4 className="mt-1.5 text-xs text-blue-light-11">Why?</h4>
        <div className="line-clamp-[10] text-justify text-sm text-gray-light-12 hover:line-clamp-none">
          {desc}
        </div>
      </div>
    </div>
  )
}

export default AgentDesc
