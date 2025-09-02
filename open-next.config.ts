const config = {
  default: {
    override: {
      wrapper: 'aws-lambda-streaming',
      converter: 'aws-apigw-v2',
      tagCache: 'dynamodb',
      queue: 'sqs',
      incrementalCache: 's3',
    }
  }
};

export default config;