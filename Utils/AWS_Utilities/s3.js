import AWS from "aws-sdk"

const s3bucket = new AWS.S3({
    accessKeyId: "AKIATS3WV6GSJS2G7V3X",
    secretAccessKey: "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",
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