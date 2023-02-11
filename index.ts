import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import {SNS} from 'aws-sdk'

console.log("creating sns")
const sns = new SNS({region: 'us-east-1'});
console.log("created sns");

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return {
      statusCode: 200,
      body: JSON.stringify({
          message: 'hello world',
      }),
   };
};