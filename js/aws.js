// import {AWS} from 'aws-sdk';

// export default function AWSReadFile(name) {

// AWS.config.update({region: 'eu-ireland'});

// var credentials = new AWS.SharedIniFileCredentials({profile: 'personal-account'});
// AWS.config.credentials = credentials;
// // Create S3 service object
// s3 = new AWS.S3({apiVersion: '2006-03-01'});

// // Create the parameters for calling createBucket
// var bucketParams = {
//   Bucket : 'farsi-ereader',
// };

// // Call S3 to create the bucket
// s3.listObjects(bucketParams, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });

// }