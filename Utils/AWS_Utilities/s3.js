import AWS from "aws-sdk"

const s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
})

const s3Upload = (options)=>{
    return new Promise((resolve, reject)=>{
        s3bucket.upload(options,(error, data)=>{
            if(error) return reject(error);
            return resolve(data);
        })
    })
}

export default s3Upload