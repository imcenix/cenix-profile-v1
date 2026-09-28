/* ==========================================================================
   DỮ LIỆU QUỸ — KHUÔN CHUNG cho mọi trang fund-<mã>.html
   --------------------------------------------------------------------------
   Nội dung, thứ tự mục và câu chữ lấy ĐÚNG theo trang quỹ trên vinacapital.com
   (bản tiếng Anh). Riêng số liệu cập nhật hằng ngày (NAV, tổng tài sản, lợi
   nhuận từ đầu năm) lấy ở bản tiếng Việt vì bản tiếng Anh còn hiển thị NAV 2022.
   Nguồn VESAF: vinacapital.com/investment-solutions/onshore-funds/vesaf/
   (đọc ngày 28/09/2026). Chuỗi NAV ngày nằm ở fund-nav-<mã>.js.

   Thêm quỹ mới: chép khối `vesaf`, đổi dữ liệu, tạo fund-<mã>.html với
   data-fund="<mã>" và nạp fund-nav-<mã>.js. Phần hiển thị không phải sửa.
   ========================================================================== */

const VC_FILES = 'https://vinacapital.com/wp-content/uploads/';

const FUNDS = {
  vesaf: {
    code: 'VINACAPITAL-VESAF',
    short: 'VESAF',
    name: 'VinaCapital Strategic Growth Equity Fund',
    hero: 'hcm-light-trails.jpg',
    intro: 'VINACAPITAL-VESAF is an open-ended equity fund that invests in companies with strong fundamentals as well as those that are undervalued by the market. The fund aims to deliver superior returns over the medium-to-long term while optimizing the risk-return trade-off.',
    asOf: '24/09/2026',
    benchmark: 'VN-Index',

    /* Bảng so sánh đầu trang: [nhãn, quỹ, chỉ số] — đúng 6 dòng lợi nhuận như trang gốc */
    returns: [
      ['YTD return (<em>2026</em>) (%)', 'As of 24/09/2026', '-6.0', '-0.5'],
      ['2025 return (%)', '', '6.3', '40.9'],
      ['2024 return (%)', '', '22.1', '12.1'],
      ['2023 return (%)', '', '30.9', '12.2'],
      ['2022 return (%)', '', '-24.4', '-32.8'],
      ['2021 return (%)', '', '67.0', '35.7']
    ],
    fundSize: '2,317.6',
    dataNote: 'Note: If report date data is unavailable, the most recent preceding trading day’s data will be automatically displayed.',

    /* Bảng kết quả hoạt động theo năm (dưới biểu đồ) */
    annual: [
      ['2025', '6.3%', '40.9%'],
      ['2024', '22.1%', '12.1%'],
      ['2023', '30.9%', '12.2%'],
      ['2022', '-24.4%', '-32.8%'],
      ['2021', '67.0%', '35.7%'],
      ['2020', '25.6%', '14.9%'],
      ['2019', '9.2%', '7.7%'],
      ['2018', '-7.6%', '-9.3%'],
      ['2017 (Inception: 18/04/2017)', '23.5%', '38.7%']
    ],
    nav: { value: '31,517.61', high: '37,880.52', low: '28,941.03', year: '2026' },

    factsheets: [
      ['VINACAPITAL-VESAF Monthly Factsheet – Aug 2026', '15/09/2026', '2026/09/20260915-VINACAPITAL-VESAF_Monthly-Factsheet_Aug-2026-EN.pdf'],
      ['VINACAPITAL-VESAF Monthly Factsheet – Jul 2026', '14/08/2026', '2026/08/20260814-VINACAPITAL-VESAF_Monthly-Factsheet_Jul-2026-EN.pdf'],
      ['VINACAPITAL-VESAF Monthly Factsheet – Jun 2026', '15/07/2026', '2026/07/20260715-VINACAPITAL-VESAF_Monthly-Factsheet_Jun-2026-EN.pdf'],
      ['VINACAPITAL-VESAF Monthly Factsheet – May 2026', '15/06/2026', '2026/06/20260615-VINACAPITAL-VESAF_Monthly-Factsheet_May-2026-EN.pdf'],
      ['VINACAPITAL-VESAF Monthly Factsheet – Apr 2026', '15/05/2026', '2026/05/20260515-VINACAPITAL-VESAF_Monthly-Factsheet_Apr-2026-EN.pdf'],
      ['VINACAPITAL-VESAF Monthly Factsheet – Mar 2026', '14/04/2026', '2026/04/20260414-VINACAPITAL-VESAF_Monthly-Factsheet_Mar-2026_EN.pdf'],
      ['VINACAPITAL-VESAF Monthly Factsheet – Feb 2026', '16/03/2026', '2026/03/20260316-VINACAPITAL-VESAF_Monthly-Factsheet_Feb-2026-EN.pdf'],
      ['VINACAPITAL-VESAF Monthly Factsheet – Jan 2026', '12/02/2026', '2026/02/20260212-VINACAPITAL-VESAF_Monthly-Factsheet_Jan-2026-EN.pdf']
    ],

    team: [
      ['Thu Nguyen, CFA', 'Deputy CEO of VinaCapital Fund Management', 'team/thu-nguyen.jpg'],
      ['Minh Dinh', 'Senior Investment Director,<br>Portfolio Manager', 'team/minh-dinh.jpg'],
      ['Trung Thai, CFA', 'Investment Director,<br>Portfolio Manager', 'team/trung-thai.jpg']
    ],

    risk: 'VINACAPITAL-VESAF has a medium-to-high risk profile and is suitable for investors seeking superior returns, with a medium-to-long-term investment horizon, and the ability to tolerate significant market volatility.',
    riskBg: 'hcmc-band-twilight.webp',

    why: [
      ['why-returns.svg', 'Outstanding returns for long term investors over a full market cycle.'],
      ['why-focus.svg', 'The fund focuses on two key groups: companies with strong fundamentals, high compound growth potential over multiple years, and attractive valuations; and companies that are underappreciated by the market but have strong catalysts to unlock value.'],
      ['why-managed.svg', 'Professionally managed by a portfolio management team with support from our in-house research team.'],
      ['why-liquidity.svg', 'High liquidity, trading daily from Monday to Friday.'],
      ['why-app.svg', 'VINACAPITAL MIO application on the web and mobile which enables investors to manage their portfolios anytime, anywhere.']
    ],

    /* Overview — VINACAPITAL-VESAF INFORMATION: liệt kê đủ như trang gốc.
       Giá trị là mảng thì hiển thị thành nhiều dòng. */
    info: [
      ['Fund structure', 'Open-ended fund domiciled in Vietnam and regulated by SSC'],
      ['Inception date', '18 April 2017'],
      ['Minimum investment amount', 'VND 100,000'],
      ['Trading frequency', 'Daily, from Monday to Friday'],
      ['Management fee', '1.75% / year'],
      ['Subscription fee', '0%'],
      ['Redemption fee (based on holding period of the fund units)', ['Day 1 to Day 364: 2%', 'Day 365 to Day 729: 1%', 'From Day 730 onwards: 0%']],
      ['Switching fee (based on switching amount)', '0%'],
      ['Other taxes and fees', 'Shall be applied in accordance with prevailing laws and regulations. For details, please refer to the fund’s prospectus and related documentation.'],
      ['Custodian bank, supervisory bank and fund administrator', 'Standard Chartered Bank Vietnam'],
      ['Transfer Agent', 'Vietnam Securities Depository and Clearing Corporation (VSDC)'],
      ['Reference benchmark', 'VN-Index'],
      ['Disclaimer', 'Investing in open-ended funds offers the potential for returns but also involves inherent risks. Returns are not guaranteed and may vary depending on investment performance.']
    ],

    navReports: [
      ['VINACAPITAL-VESAF Daily NAV 24/09/2026', '25/09/2026', '2026/09/20260925_VESAF_BC_Daily_20260924.xlsx'],
      ['VINACAPITAL-VESAF Daily NAV 23/09/2026', '24/09/2026', '2026/09/20260924_VESAF_BC_Daily_20260923.xlsx'],
      ['VINACAPITAL-VESAF Daily NAV 22/09/2026', '23/09/2026', '2026/09/20260923_VESAF_BC_Daily_20260922.xlsx'],
      ['VINACAPITAL-VESAF Weekly NAV 21/09/2026', '22/09/2026', '2026/09/20260922_VESAF_BC_Weekly_20260921.xlsx'],
      ['VINACAPITAL-VESAF Daily NAV 21/09/2026', '22/09/2026', '2026/09/20260922_VESAF_BC_Daily_20260921.xlsx'],
      ['VINACAPITAL-VESAF Daily NAV 20/09/2026', '21/09/2026', '2026/09/20260921_VESAF_BC_Daily_20260920.xlsx'],
      ['VINACAPITAL-VESAF Daily NAV 17/09/2026', '18/09/2026', '2026/09/20260918_VESAF_BC_Daily_20260917.xlsx'],
      ['VINACAPITAL-VESAF Daily NAV 16/09/2026', '17/09/2026', '2026/09/20260917_VESAF_BC_Daily_20260916.xlsx']
    ],

    documents: [
      ['Fund charter', [
        ['VINACAPITAL-VESAF Summary of Fund Charter – May 2024', '10/05/2024', '2025/04/20240510-VESAF-Tom-tat-sua-doi-Dieu-le-Quy-nam-2024.pdf'],
        ['VINACAPITAL-VESAF Fund Charter – May 2024', '10/05/2024', '2025/04/20240510-VESAF-CBTT-Dieu-le-sua-doi-Quy-nam-2024.pdf'],
        ['VINACAPITAL-VESAF Summary of Fund Charter – May 2023', '12/05/2023', '2023/10/20230512-VINACAPITAL-VESAF-Tom-tat-sua-doi-bo-sung-Dieu-le-PL-XXVIII-052023.pdf'],
        ['VINACAPITAL-VESAF Fund Charter – May 2023', '12/05/2023', '2023/10/20230512-VINACAPITAL-VESAF-Dieu-le-Quy-sua-doi-05.2023.pdf'],
        ['VESAF – Fund Charter – May 2022', '11/05/2022', '2022/07/20220511-vesaf-iu-l-qu-may-22-vcfm-1.pdf'],
        ['VESAF – Summary of Fund Charter – Apr 2021', '23/04/2021', '2022/07/20210423-vesaf-thong-bao-sua-doi-dieu-le-hieu-luc-tu-23.04.2021.pdf'],
        ['VESAF – Fund Charter – Apr 2021', '23/04/2021', '2022/07/20210423-vesaf-dieu-le-sua-doi-hieu-luc-tu-23.04.2021.pdf']
      ]],
      ['Prospectus', [
        ['VINACAPITAL-VESAF Summary of Prospectus – Jul 2025', '25/07/2025', '2025/07/20250725_VESAF-Tom-tat-sua-doi-bo-sung-BCB-PLXXVIII-07.2025.pdf'],
        ['VINACAPITAL-VESAF Prospectus – Jul 2025', '25/07/2025', '2025/07/20250725_VESAF-BCB-sua-doi-bo-sung-07.2025.pdf'],
        ['VINACAPITAL-VESAF Summary Of Prospectus – Oct 2024', '01/10/2024', '2025/04/20241001_VINACAPITAL-VESAF-Summary-of-Prospectus-%E2%80%93-Oct-2024.pdf'],
        ['VINACAPITAL-VESAF Prospectus – Oct 2024', '01/10/2024', '2025/04/20241001_VESAF-BCB-sua-doi-bo-sung-10-2024.pdf'],
        ['VINACAPITAL-VESAF Summary of Prospectus – Aug 2024', '05/08/2024', '2025/04/20240805_VESAF-Tom-tat-sua-doi-bo-sung-Ban-cao-bach-PL-XXVIII-Aug-2024.pdf'],
        ['VINACAPITAL-VESAF Prospectus – Aug 2024', '05/08/2024', '2025/04/20240805_VESAF-Ban-cao-bach-sua-doi-bo-sung-08-2024.pdf'],
        ['VINACAPITAL-VESAF Prospectus – June 2024', '27/06/2024', '2025/04/20240627-VESAF-Ban-cao-bach-sua-doi-bo-sung-thang-6.2024.pdf'],
        ['VINACAPITAL-VESAF Summary of Prospectus – June 2024', '27/06/2024', '2025/04/20240627_VESAF-Tom-tat-sua-doi-bo-sung-Ban-cao-bach-PL-XXVIII-06.2024-1.pdf']
      ]]
    ],

    source: 'https://vinacapital.com/investment-solutions/onshore-funds/vesaf/'
  }
};

/* Phần dùng chung cho mọi quỹ mở trong nước */
const FUND_COMMON = {
  mio: 'https://mio.vinacapital.com/',
  transfer: `${VC_FILES}2023/10/Money-Transfer-Instructions-EN.pdf`,
  advice: 'funds.html',
  hotline: '1900 636 553',
  steps: [
    ['Decide which funds to invest into', 'Please click Get Investment Advice and leave your info; or contact 1900 636 553 for advice.', 'Get investment advice', 'advice'],
    ['Create VinaCapital MiO account online in a few minutes', 'Or log in to your VinaCapital MiO account if you have already created the account.', 'Visit VinaCapital MiO', 'mio'],
    ['Place Subscription order and Transfer your money', 'Transfer money to the fund’s account at custodian bank.', 'Money transfer instructions', 'transfer'],
    ['Receive Confirmation from VinaCapital', 'VinaCapital will confirm via SMS and email when your transfer has been received and the subscription order is completed.', '', '']
  ],
  calc: { years: 10, monthly: 5, rate: 15 },
  distributors: 'fund/distributors.webp'
};
