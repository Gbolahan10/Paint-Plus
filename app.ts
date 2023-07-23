import App from './server';
// import QueueSub from '@/queue/subscriber';
// import AuthRoute from '@routes/auth.route';
import IndexRoute from './src/routes/index.route';
// import UsersRoute from '@routes/users.route';
// import WalletRoute from '@routes/thresh0ld/wallet.route';
// import AdminRoute from '@routes/admin/admin.route';
// import CallbackRoute from '@/routes/thresh0ld/callback.route';
// import InvoiceRoute from '@routes/invoices.route';
import validateEnv from './src/utils/helpers/validateEnv';
// import TransactionsRoute from './routes/transactions.route';

validateEnv();

const app = new App([
  new IndexRoute(),
//   new UsersRoute(),
//   new AuthRoute(),
//   new WalletRoute(),
//   new AdminRoute(),
//   new CallbackRoute(),
//   new InvoiceRoute(),
//   new TransactionsRoute(),
]);

//new QueueSub();

app.listen();
