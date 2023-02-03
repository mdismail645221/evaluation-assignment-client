// IMG BB WEBSITE UPLOAD THE IMG AND GET THE ORGINAL IMG URL
export const UploadImgBB = async imgfile => {
    console.log(imgfile)
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=d61cc6bb5c2b1469d71870f97d50b0ff`;
    console.log({url})
    const fromData = new FormData();
    fromData.append("image", imgfile);
    const res = await fetch(url, {
        method: 'POST',
        body: fromData
    })
    const data = await res.json()
    return data
}