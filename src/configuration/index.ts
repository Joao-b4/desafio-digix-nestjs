export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString: process.env.MONGO_URL || 'mongodb+srv://admin:6rQIjVr4Sk4ghnTc@cluster0.j1nvt.mongodb.net/digix?retryWrites=true&w=majority'
};

export const WEB_SERVER_CONFIGURATION = {
  port: process.env.WEB_PORT || 3000,
};