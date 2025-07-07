# Sales Tracker Frontend

A modern, responsive web application for tracking sales data, managing products, and analyzing business performance with real-time insights and comprehensive analytics.
[🌐 Live Demo (Global Access)](https://sales-tracker-frontend-theta.vercel.app/)

## 🚀 Features

- **Dashboard Overview**: Real-time sales metrics and performance indicators
- **Product Management**: Add, track, and manage product entries with cost and selling price
- **Sales Analytics**: Interactive charts and graphs for data visualization
- **Reports Generation**: Comprehensive sales reports and summaries
- **Data Summary**: Detailed breakdown of sales performance and trends
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Date Picker**: React DatePicker
- **Icons**: Lucide React
- **Linting**: ESLint

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd sales-tracker-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.jsx
│   ├── MonthlySalesBarChart.jsx
│   ├── Navbar.jsx
│   ├── ProductCalculator.jsx
│   ├── ProductEntryForm.jsx
│   ├── ProductList.jsx
│   ├── ProfitPieChart.jsx
│   └── SummaryTable.jsx
├── pages/              # Main application pages
│   ├── DashboardPage.jsx
│   ├── DataSummaryPage.jsx
│   ├── LandingPage.jsx
│   └── ReportsPage.jsx
├── assets/             # Static assets
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Explained

### Dashboard
- Overview of sales performance
- Key metrics and KPIs
- Quick access to main functions

### Product Management
- Add new products with cost and selling price
- Track product entries with dates
- Calculate profit margins automatically

### Analytics & Reports
- Interactive bar charts for monthly sales
- Pie charts for profit analysis
- Comprehensive data summaries
- Exportable reports

### User Experience
- Intuitive navigation with React Router
- Dark/Light mode toggle
- Responsive design for all devices
- Loading states and smooth transitions

## 🎨 Customization

The application uses Tailwind CSS for styling, making it easy to customize:

- Modify `tailwind.config.js` for theme customization
- Update color schemes in the CSS files
- Add new components in the `components/` directory

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and Vite for optimal performance
- Styled with Tailwind CSS for modern UI
- Charts powered by Recharts for data visualization
- Icons from Lucide React

## 📞 Support

If you have any questions or need support, please open an issue in the repository or contact the development team.

---

**Happy Sales Tracking! 📊**

