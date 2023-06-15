# Live website : www.skavitkar.com 

# Getting Started with Morpholio

To get started with Morpholio, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/S-Threepio/Morpholio.git`.
2. Navigate to the project directory: `cd Morpholio`.
3. Install the necessary dependencies by running: `npm install`.

## `npm start`
- Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- The page will reload when you make changes.\
- You may also see any lint errors in the console.


# Creating your own portfolio using Morpholio
- Clone this repository and open the project in an IDE (such as Visual studio code)
- Put all the images that you want to use in [img](https://github.com/S-Threepio/Morpholio/tree/master/src/imgs) directory
- Navigate to [GlobalDataProvider](https://github.com/S-Threepio/S-Threepio.github.io/blob/master/src/provider/GlobalDataProvider.js)

- Update the Json file data as per your requirement.
- Every entry corresponds to a page and you can edit the content and the image to be used as per your need 
- Delete the JSON entry for the pages that you don't want to use
- **PLEASE NOTE :**
Having a resume and a project is the bare minimum requirement for this site.
If you dont have one of these then in addition to deleting the json object you have to delete the respective button on landing page's basic button section 
[BasicButtons](https://github.com/S-Threepio/S-Threepio.github.io/blob/master/src/components/Landing/BasicButtons.js) 


# Deploying your Portfolio on github.io
- Open the package.json file in your project and change the following property:

- "homepage": "https://your-username.github.io/your-repo-name",
**This field is not the domain name of your website but rather where your repository is located**

- Replace your-username with your GitHub username and your-repo-name with the name of your GitHub repository.
Save the changes to the package.json file.
**github-gh page dependency and pre-deploy,deploy scripts are already present in the repository**

- Finally, to deploy your app, run the command: **npm run deploy**. 
This will create a branch called gh-pages in your GitHub repository and deploy the contents of the build folder to that branch.
After the deployment is complete, you can access your live Morpholio website at https://your-username.github.io/your-repo-name.
**Note: Make sure you have the necessary permissions to deploy to the repository.**


# Custom Domain name for your website
- Buy a domain from a domain name provider
- Go to the DNS settings page for domain name provider
- Point all the A records to 
`185.199.108.153`
`185.199.109.153`
`185.199.110.153`
`185.199.111.153`
as per [Github managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

- Point the CNAME record to your current github domain for your portfolio e.g. **"https://your-username.github.io"**
- In the setting page of the repository got to pages and put your custom domain name e.g. **"www.skavitkar.com"**
- click save, and DNS check will get done in some time.
- once the DNS check is complete, check the Enforce https box
- Voila your custom domain is ready!!!

Happy deploying! 🚀🌐
Let's get creative and transform your portfolio with Morpholio! 🚀🎨


