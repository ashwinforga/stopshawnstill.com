const Section = ({ title, content }) => (
  <section className='mb-12 bg-white shadow-md rounded-lg p-6'>
    <h3 className='text-2xl font-bold mb-4 text-red-700'>{title}</h3>
    <div className='space-y-4 text-gray-600'>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </section>
);

const MainContent = () => {
  const sections = [
    {
      title: 'FAKE ELECTOR; "TOP ELECTION FIGHTER"',
      content: [
        'In 2022, Shawn Still said that his "proudest moment was serving as a Republican nominee for Presidential Elector pledged to Donald Trump and Mike Pence in 2020."',
        'A year later, Still was indicted along with Donald Trump and 17 others in connection with efforts to overturn the election, "with prosecutors using a statute normally associated with mobsters." The "indictment alleges that rather than abide by Georgia\'s legal process for election challenges, the defendants engaged in a criminal racketeering enterprise to overturn Georgia\'s presidential election result."',
        'Despite wreaking havoc on Georgia\'s election integrity by trying to overturn the election, Still views himself as Georgia\'s "top election fighter," noting that he was one of two plaintiffs in state superior court to challenge the Secretary of State to investigate hundreds of affidavits of irregularities.',
        'In the legislature, Still has followed through on his promise to address election integrity issues. He has: co-sponsored a bill to eliminate drop boxes; co-sponsored a bill to reduce early voting periods; voted to lower the barrier to voter challenges around the state; voted for a bill that gives election superintendents discretion to have fewer voting machines and require that election voters be U.S. citizens while codifying increased access for poll watchers; voted against a ranked choice voting bill; and voted to empower state election boards to investigate the secretary of state.',
      ],
    },
    {
      title: 'ANTI-CHOICE EXTREMIST',
      content: [
        "Shawn Still's responses to a 2022 candidate questionnaire for Georgia Life Alliance all but confirm him to be a certified anti-choice extremist.",
        'Among other things, Still believes abortion should be illegal, would advocate for changes to Roe v. Wade, supports Georgia\'s Pain Capable Unborn Child Protection Act, supports Georgia\'s "Women\'s Right to Know" law, supports mandatory ultrasounds, and supports the controversial 2019 heartbeat bill that elicited boycott threats from Hollywood and was ruled unconstitutional by a federal judge. Still has also pledged to "protect living human embryos," which has been connected to a ban of in-vitro fertilization (IVF).',
      ],
    },
    {
      title: 'PRO-GUN EXTREMIST',
      content: [
        'In a 2024 candidate questionnaire for Georgia Gun Owners, Shawn Still outed himself as a proper extremist on gun rights when he indicated that he would oppose and vote no on all methods of gun control, "including those that the media calls \'reasonable.\'"',
        'As a legislator, Still has voted for the NRA-backed Firearms Industry Nondiscrimination Act, co-sponsored a five-day sales tax holiday on all firearms and gun accessories, and co-sponsored a bill to waive sales taxes on the purchase of gun safes.',
      ],
    },
  ];

  return (
    <main className='container mx-auto px-4 py-12'>
      <h2 className='text-4xl underline font-bold mb-12 text-center text-red-700'>
        SHAWN STILL IS WRONG FOR GEORGIA.
      </h2>
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </main>
  );
};

export default MainContent;
