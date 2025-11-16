<!-- @format -->

# Restaurant Food Management CRM

A comprehensive, modern Customer Relationship Management (CRM) system designed specifically for restaurant operations. This platform streamlines order management, menu administration, rider coordination, analytics, and payment processing in a unified, intuitive interface.

## 🚀 Features

### Core Functionality

- **Dashboard Overview** - Real-time metrics, recent transactions, and order monitoring
- **Order Management** - Complete order lifecycle tracking with status updates and delivery assignment
- **Menu Management** - Intuitive food menu administration with item categorization and pricing
- **Rider Management** - Delivery personnel coordination and performance tracking
- **Payment Processing** - Transaction management and payment detail monitoring
- **Analytics & Insights** - Customer behavior analysis and business intelligence metrics
- **Promotion Management** - Marketing campaign creation and promotional offer administration
- **Schedule Management** - Restaurant operation hours and staff scheduling
- **Withdrawal Requests** - Financial transaction and payout request handling
- **Settings & Configuration** - Restaurant information and system preferences

### Technical Features

- **Modern UI/UX** - Built with React 19 and Next.js 15 for optimal performance
- **Responsive Design** - Mobile-first approach with Tailwind CSS v4
- **Component Library** - Radix UI primitives for accessible, composable components
- **Type Safety** - Full TypeScript implementation for robust code
- **Authentication Flow** - Complete auth system with sign in/up, OTP verification, and password recovery
- **Data Visualization** - Interactive charts and graphs using Recharts
- **Toast Notifications** - Real-time user feedback with react-hot-toast

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) (App Router)
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**:
  - Radix UI (Dialog, Select, Tabs, Tooltip, etc.)
  - Lucide React (Icons)
  - React Icons
- **Charts**: Recharts 3.2.1
- **Animations**: Motion (Framer Motion) 12.23.12
- **Utilities**:
  - clsx & tailwind-merge for conditional styling
  - class-variance-authority for variant management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** (comes with Node.js) or **yarn** or **pnpm** or **bun**
- **Git** for version control

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rahul3507/restaurant_food_management_crm.git
cd restaurant_food_management_crm
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4. Open the Application

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application will automatically reload when you make changes to the source code.

## 📁 Project Structure

```
restaurant_food_management_crm/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (auth)/              # Authentication routes
│   │   │   ├── signIn/
│   │   │   ├── signUp/
│   │   │   ├── forget-pass/
│   │   │   ├── reset-pass/
│   │   │   └── verify-otp/
│   │   ├── analytics/           # Analytics dashboard
│   │   ├── menu-manag/          # Menu management
│   │   ├── new-order/           # New order creation
│   │   ├── order-list/          # Order listing
│   │   ├── payment/             # Payment management
│   │   ├── promotion/           # Promotion management
│   │   ├── rider-manag/         # Rider management
│   │   ├── schedule/            # Schedule management
│   │   ├── settings/            # Settings pages
│   │   └── withdraw-request/    # Withdrawal management
│   ├── components/              # React components
│   │   ├── analytics/          # Analytics components
│   │   ├── authentication/      # Auth forms
│   │   ├── common/             # Shared components
│   │   ├── dashboard/          # Dashboard widgets
│   │   ├── menuManag/          # Menu components
│   │   ├── orderManag/         # Order components
│   │   ├── payment/            # Payment components
│   │   ├── promotion/          # Promotion components
│   │   ├── riderManag/         # Rider components
│   │   ├── schedule/           # Schedule components
│   │   ├── settings/           # Settings components
│   │   └── ui/                 # UI primitives (shadcn/ui)
│   ├── data/                   # Static data and mock data
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript type definitions
├── public/                      # Static assets
└── Configuration files
```

## 🔧 Available Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start development server at localhost:3000 |
| `npm run build` | Build production-ready application         |
| `npm run start` | Start production server                    |
| `npm run lint`  | Run ESLint for code quality checks         |

## 🎨 Key Components

### Authentication

- Sign In / Sign Up forms
- OTP verification
- Password recovery and reset
- Protected route handling

### Dashboard

- Metrics cards with key performance indicators
- Recent transactions overview
- Recent orders feed
- Withdrawal request management

### Order Management

- Order list with filtering and search
- Order details modal
- Status update functionality
- Delivery assignment to riders

### Menu Management

- Food item cards with images
- Add/edit menu items
- Category management
- Pricing and availability controls

### Analytics

- Customer insights and behavior
- Revenue metrics
- Menu item performance
- Interactive data visualizations

## 🔐 Authentication Flow

1. **Sign Up** - New user registration with email/phone
2. **OTP Verification** - Secure verification via one-time password
3. **Sign In** - Email/password authentication
4. **Forgot Password** - Password recovery flow
5. **Reset Password** - Secure password update

## 🎯 Environment Configuration

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
# Add other configuration as needed
```

## 📦 Build for Production

```bash
npm run build
npm run start
```

This will create an optimized production build in the `.next` directory.

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rahul3507/restaurant_food_management_crm)

### Other Platforms

This application can also be deployed on:

- AWS Amplify
- Netlify
- Railway
- DigitalOcean App Platform

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🐛 Bug Reports

If you discover any bugs, please create an issue on GitHub with detailed information about the problem.

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- [Recharts](https://recharts.org/) - Composable charting library

---

**Built with ❤️ for modern restaurant management**
