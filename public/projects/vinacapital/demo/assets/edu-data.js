const EDU_BASE = 'https://vinacapital.com';

const LEARN = {
  label: 'Learning',
  title: 'Investment education',
  intro: 'From first principles to long-term planning — choose a level and start reading.',
  more: 'See all articles',
  tabs: [
    {
      key: 'basic', name: 'Basic',
      lead: {
        title: 'Learn about open-ended funds',
        desc: 'An open-ended fund is a pool of money belonging to many investors with a shared objective, managed by the investment professionals of a fund management company.',
        img: 'education/open-fund.png',
        href: `${EDU_BASE}/investment-education/learn-about-oefs/`
      },
      items: [
        ['Basic definitions when investing in open-ended funds', `${EDU_BASE}/vi/investment-education/basic-definitions-when-investing-in-oefs/`],
        ['How open-ended funds are managed', `${EDU_BASE}/investment-education/how-oefs-manageds/`],
        ['Using the VinaCapital MiO application', `${EDU_BASE}/vi/investment-education/using-vinacapital-mio-app/`],
        ['Learn about exchange-traded funds (ETFs)', `${EDU_BASE}/investment-education/learn-about-etfs/`]
      ]
    },
    {
      key: 'advanced', name: 'Advanced',
      lead: {
        title: 'Start with VinaSIP — investing every month',
        desc: 'Invest a fixed amount each month to stay disciplined, average out your cost of investment and move step by step towards your goal.',
        img: 'education/etf.jpg',
        href: `${EDU_BASE}/investment-education/vinasip/`
      },
      items: [
        ['Experience in investing in open-ended funds · Part 1', `${EDU_BASE}/vi/investment-education/experience-in-investing-oefs-part-1/`],
        ['Experience in investing in open-ended funds · Part 2', `${EDU_BASE}/vi/investment-education/experience-in-investing-oefs-part-2/`],
        ['Experience in investing in open-ended funds · Part 3', `${EDU_BASE}/vi/investment-education/experience-in-investing-oefs-part-3/`],
        ['Learn about exchange-traded funds (ETFs)', `${EDU_BASE}/investment-education/learn-about-etfs/`]
      ]
    },
    {
      key: 'general', name: 'General knowledge',
      lead: {
        title: 'Building a personal financial plan',
        desc: 'Every goal in life needs a plan — for your family, your children’s future, your retirement and the prosperity you want to keep.',
        img: 'investor.jpg',
        href: `${EDU_BASE}/vi/investment-education/personal-finance/`
      },
      items: [
        ['Building financial foundations for your family', `${EDU_BASE}/vi/investment-education/personal-finance/`],
        ['Preparing your children for the road ahead', `${EDU_BASE}/vi/investment-education/personal-finance/`],
        ['Taking charge of your retirement years', `${EDU_BASE}/vi/investment-education/personal-finance/`],
        ['Preserving your financial prosperity', `${EDU_BASE}/vi/investment-education/personal-finance/`]
      ]
    }
  ]
};

const LEARN_ALL = (() => {
  const seen = new Set();
  const out = [];
  LEARN.tabs.forEach((t) => {
    [[t.lead.title, t.lead.href, t.lead.desc], ...t.items].forEach((a) => {
      if (seen.has(a[0])) return;
      seen.add(a[0]);
      out.push({ title: a[0], href: a[1], desc: a[2] || '', level: t.key, levelName: t.name });
    });
  });
  return out;
})();
