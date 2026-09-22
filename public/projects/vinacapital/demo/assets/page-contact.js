/* CONTACT — official contact routes and offices from vinacapital.com/contact. */
const CONTACT_ROUTES = [
  {
    no: '01', label: 'Investor relations',
    title: 'Fund news, reports and investor enquiries',
    text: 'For the latest fund news and reports, or questions about investing with VinaCapital.',
    email: 'ir@vinacapital.com'
  },
  {
    no: '02', label: 'General enquiries',
    title: 'Corporate, partnership and media enquiries',
    text: 'Connect with the Group for general information, corporate matters and partnership opportunities.',
    email: 'info@vinacapital.com'
  },
  {
    no: '03', label: 'Careers',
    title: 'Join the VinaCapital team',
    text: 'Explore current opportunities or contact our recruitment team about an advertised role.',
    email: 'application@vinacapital.com'
  }
];

const CONTACT_OFFICES = [
  {
    city: 'Ho Chi Minh City', tag: 'Head office', image: 'hcm-financial-district.jpg',
    address: '17th Floor, Sun Wah Tower<br>115 Nguyen Hue, Sai Gon Ward',
    phone: '+84 28 3821 9930', map: 'https://maps.google.com/?q=Sun+Wah+Tower+115+Nguyen+Hue+Ho+Chi+Minh+City'
  },
  {
    city: 'Hanoi', tag: 'Vietnam office', image: 'hcm-heritage.jpg',
    address: '2nd Floor, International Centre<br>17 Ngo Quyen, Hoan Kiem Ward',
    phone: '+84 24 3936 4630', map: 'https://maps.google.com/?q=International+Centre+17+Ngo+Quyen+Hanoi'
  },
  {
    city: 'Singapore', tag: 'Regional office', image: 'skyline-dusk.jpg',
    address: '#42-01, Suntec Tower 4<br>6 Temasek Boulevard, Singapore 038986',
    phone: '+65 6332 9081', map: 'https://maps.google.com/?q=Suntec+Tower+4+Singapore'
  }
];

VC.mountPage({
  page: 'contact',
  hero: {
    img: 'hcmc-twilight.webp',
    crumb: 'Contact',
    eyebrow: 'Connect with VinaCapital',
    title: 'Start a conversation<br>with our team',
    lead: 'Whether you are an investor, partner or prospective colleague, our teams in Vietnam and Singapore are ready to connect you with the right expertise.'
  },
  body: `
<nav class="subnav contact-nav" aria-label="Page contents"><div class="wrap subnav__in">
  <a href="#enquiries">Enquiries</a><a href="#offices">Our offices</a><a href="#official-channels">Official channels</a>
</div></nav>

<section class="contact-intro" id="enquiries">
  <div class="wrap contact-intro__head">
    <div><p class="eyebrow eyebrow--rule">How can we help?</p><h2>Choose the right team for a faster response.</h2></div>
    <p>VinaCapital welcomes enquiries from current and prospective investors, partners, media and professionals interested in joining the Group.</p>
  </div>
  <div class="wrap contact-routes">
    ${CONTACT_ROUTES.map(route => `<article class="contact-route">
      <span>${route.no}</span><p>${route.label}</p><h3>${route.title}</h3><div>${route.text}</div>
      <a href="mailto:${route.email}">${route.email}<i>↗</i></a>
    </article>`).join('')}
  </div>
</section>

<section class="contact-offices" id="offices">
  <div class="wrap contact-offices__head"><p class="eyebrow eyebrow--rule">Our presence</p><h2>Local insight.<br>Regional reach.</h2></div>
  <div class="wrap contact-offices__grid">
    ${CONTACT_OFFICES.map((office, index) => `<article class="contact-office">
      <div class="contact-office__media"><img src="${IMG}${office.image}" alt="${office.city}" loading="lazy">${index === 0 ? corner() : ''}</div>
      <div class="contact-office__body"><p>${office.tag}</p><h3>${office.city}</h3><address>${office.address}</address><a href="tel:${office.phone.replace(/\s/g,'')}">${office.phone}</a><a class="tlink" href="${office.map}" target="_blank" rel="noopener">View location <i>↗</i></a></div>
    </article>`).join('')}
  </div>
</section>

<section class="contact-direct">
  <div class="wrap contact-direct__grid">
    <div><p class="eyebrow eyebrow--rule">Direct access</p><h2>Manage your investment through MiO</h2><p>Current investors can securely access their portfolio, place orders and review transactions through VinaCapital MiO.</p><a class="btn" href="#">Open MiO <i>↗</i></a></div>
    <div class="contact-direct__mark"><span>MiO</span><p>Your VinaCapital investment<br>in one secure place.</p></div>
  </div>
</section>

<section class="contact-safe" id="official-channels">
  <div class="wrap contact-safe__grid">
    <div><p class="eyebrow">Investor protection</p><h2>Use official channels only.</h2></div>
    <div><p>Advice about VinaCapital open-ended fund certificates is provided only by VinaCapital consultants or employees of officially appointed distribution agents.</p><p>Fund certificates can only be transacted through MiO or official distribution partners. Never transfer funds to personal or unverified bank accounts.</p><a class="tlink" href="#canh-bao">Read the full fraud warning <i>↓</i></a></div>
  </div>
</section>`
});
