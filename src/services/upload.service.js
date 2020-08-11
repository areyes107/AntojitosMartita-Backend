const admin = require('firebase-admin');

const uploadFile = (route, filename, file)=>{
    const bucket = admin.storage().bucket('gs://antojitos-martita.appspot.com');
    
        const destinationFile = bucket.file(`${route}${filename}`);  
        return destinationFile.save (file, async ()=>{
          return await destinationFile.getSignedUrl({action: 'read'})
        })
}

module.exports = {
    uploadFile
}