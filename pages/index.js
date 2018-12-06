const path = require('path')
const fs = require('fs')
const appJsonPath = path.resolve(process.cwd(),'../app.json')
if(fs.existsSync(appJsonPath)){
  const appJson = require(appJsonPath)
  const pages = appJson.pages
  const stageName = 'page1'
  if(pages){
    let find=false
    const url = `pages/${stageName}/${stageName}`
    for (let i = 0; i < pages.length; i++) {
      let item = pages[i]
      if(item.indexOf(url)===-1){
        pages.push(url)
        find = true
        break
      }
    }
    if(find){
      fs.writeFileSync(appJsonPath,JSON.stringify(appJson),'utf-8')
    }
  }
}
