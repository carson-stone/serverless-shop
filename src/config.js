export default {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'serverless-shop-review-images',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://wsftrbd4sk.execute-api.us-east-2.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_sZvHFAOaO',
    APP_CLIENT_ID: '7qrhnu6oi061m6akt1vfo40vru',
    IDENTITY_POOL_ID: 'us-east-2:b500da66-8337-486f-b9c7-992ec4ef4dd5',
  },
};
