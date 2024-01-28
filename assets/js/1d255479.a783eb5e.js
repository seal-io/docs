"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25206],{57736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:3},l="Airgap Installation",o={unversionedId:"deploy/airgap",id:"deploy/airgap",title:"Airgap Installation",description:"Suitable for offline installation scenarios.",source:"@site/docs/deploy/airgap.md",sourceDirName:"deploy",slug:"/deploy/airgap",permalink:"/docs/deploy/airgap",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/deploy/airgap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"High Availability Installation",permalink:"/docs/deploy/replication"},next:{title:"Local Docker Mode",permalink:"/docs/deploy/local-docker-mode"}},s={},p=[{value:"Preparing offline images",id:"preparing-offline-images",level:2},{value:"Preparing offline catalog",id:"preparing-offline-catalog",level:2},{value:"Install Walrus",id:"install-walrus",level:2},{value:"Standalone Installation",id:"standalone-installation",level:3},{value:"High Availability Installation",id:"high-availability-installation",level:3},{value:"Using intranet catalog",id:"using-intranet-catalog",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"airgap-installation"},"Airgap Installation"),(0,i.kt)("p",null,"Suitable for offline installation scenarios."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prerequisites:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Provide an intranet container registry, e.g. Harbor;"),(0,i.kt)("li",{parentName:"ul"},"Provide an intranet Git-based code repository, e.g. GitLab;"),(0,i.kt)("li",{parentName:"ul"},"Allow access from the Walrus server to the container registry and the code repository."))),(0,i.kt)("h2",{id:"preparing-offline-images"},"Preparing offline images"),(0,i.kt)("p",null,"Retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"walrus-images.txt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"walrus-save-images.sh")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"walrus-load-images.sh")," files from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seal-io/walrus/releases"},"Walrus Releases")," for downloading offline images and pushing them to the container registry."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"walrus-save-images.sh")," to download offline images on a Docker host with internet access:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bash walrus-save-images.sh --image-list walrus-images.txt\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Upload the saved offline image package ",(0,i.kt)("inlineCode",{parentName:"li"},"walrus-images.tar.gz")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"walrus-load-images.sh")," to a Docker host that has access to the container registry. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"walrus-load-images.sh")," to upload the offline images. Taking Harbor as an example for the container registry (if not, ensure to create a ",(0,i.kt)("inlineCode",{parentName:"li"},"sealio")," project in the container registry beforehand).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker login registry.example.com --username admin --password Harbor12345\nbash walrus-load-images.sh --registry registry.example.com --harbor-user admin --harbor-password Harbor12345\n")),(0,i.kt)("h2",{id:"preparing-offline-catalog"},"Preparing offline catalog"),(0,i.kt)("p",null,"Fork or import all repositories from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/walrus-catalog"},"Builtin catalog")," into the code repository."),(0,i.kt)("p",null,"You can refer to the following script to clone all repositories from ",(0,i.kt)("inlineCode",{parentName:"p"},"walrus-catalog")," in batches and upload them to the code repository. Each repository needs to correspond to a specific internal repository, such as a GitLab Project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# Walrus catalog org\nORG_NAME="walrus-catalog"\n\n# Get all repos in the Walrus catalog org\nREPOS=$(curl -s "https://api.github.com/orgs/$ORG_NAME/repos" | jq -r \'.[] | select(.archived == false) | .name\')\n\nfor REPO_NAME in $REPOS; do\n  # Clone repo\n  git clone "https://github.com/$ORG_NAME/$REPO_NAME"\ndone\n\necho "All done!"\n')),(0,i.kt)("h2",{id:"install-walrus"},"Install Walrus"),(0,i.kt)("h3",{id:"standalone-installation"},"Standalone Installation"),(0,i.kt)("p",null,"Update the image in ",(0,i.kt)("a",{parentName:"p",href:"/docs/deploy/standalone"},"Standalone Installation")," according to the intranet contianer registry. Additionally, add the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_SETTING_IMAGE_REGISTRY"),", pointing to the intranet container registry and the offline Deployer image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always --name walrus \\\n  -p 80:80 -p 443:443 \\\n  -e SERVER_SETTING_IMAGE_REGISTRY='registry.example.com' \\\n  registry.example.com/sealio/walrus:v0.5.0\n")),(0,i.kt)("p",null,"If your container registry is a private registry that requiring authentication to pull images, additional configuration is needed. The steps are as follows."),(0,i.kt)("p",null,"For Standalone Installation of Walrus, the built-in K3s is used as the underlying runtime environment. If there is a need to configure K3s to pull images from a private registry, you should mount the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," into the Walrus server."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the host where the Walrus server will run, create the ",(0,i.kt)("inlineCode",{parentName:"li"},"registries.yaml"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /etc/walrus/k3s\nvim /etc/walrus/k3s/registries.yaml\n")),(0,i.kt)("p",null,"Fill in the following YAML content, replacing it with your container registry, username and password. If the private registry uses an untrusted TLS certificate, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"insecure_skip_verify")," parameter to skip certificate verification. If not needed, simply remove it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com"\n  registry.example.com:\n    endpoint:\n      - "https://registry.example.com"\nconfigs:\n  "registry.example.com":\n    auth:\n      username: xxxxxx # This is the registry username\n      password: xxxxxx # This is the registry password\n    tls:\n      insecure_skip_verify: true\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"When running the Walrus, mount the ",(0,i.kt)("inlineCode",{parentName:"li"},"registries.yaml")," into the Walrus server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always --name walrus \\\n  -p 80:80 -p 443:443 \\\n  -e SERVER_SETTING_IMAGE_REGISTRY='registry.example.com' \\\n  -v /etc/walrus/k3s/registries.yaml:/etc/rancher/k3s/registries.yaml \\\n  registry.example.com/sealio/walrus:v0.5.0\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"After the Walrus server is running, enter the Walrus container to verify if the private registry configuration is effective:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it walrus bash\ncat /var/lib/k3s/agent/etc/containerd/config.toml\n")),(0,i.kt)("p",null,"For more details, refer to the official K3s documentation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.k3s.io/installation/private-registry"},"K3s Private Registry Configuration"),"."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Access the Walrus UI, and after the initial login, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<WALRUS_URL>/v1/settings"),". Validate whether the ",(0,i.kt)("inlineCode",{parentName:"li"},"ImageRegistry")," setting are effective.")),(0,i.kt)("h3",{id:"high-availability-installation"},"High Availability Installation"),(0,i.kt)("p",null,"Update the image in ",(0,i.kt)("a",{parentName:"p",href:"/docs/deploy/replication"},"High Availability Installation")," according to the intranet contianer registry. Additionally, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_SETTING_IMAGE_REGISTRY")," environment variable to the Walrus deployment, pointing to the intranet container registry and the offline Deployer image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vim walrus.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: walrus\n  namespace: walrus-system\nspec:\n  ...\n  template:\n    ...\n    spec:\n      containers:\n        - name: walrus-server\n          image: sealio/walrus:v0.5.0\n          ...\n          env:\n            - name: SERVER_SETTING_IMAGE_REGISTRY\n              value: registry.example.com\n...\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f walrus.yaml\n")),(0,i.kt)("p",null,"If your container registry is a private registry that requiring authentication to pull images, additional configuration is needed. The steps are as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To pull images from a private registry, Kubernetes requires credentials. First, create a credential secret:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret docker-registry registry-credential \\\n  --docker-server=<your-container-registry> \\\n  --docker-username=<your-name> \\\n  --docker-password=<your-password> \\\n  --docker-email=<your-email>\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Modify the YAML in ",(0,i.kt)("a",{parentName:"li",href:"/docs/deploy/replication"},"High Availability Installation"),", add the ",(0,i.kt)("inlineCode",{parentName:"li"},"imagePullSecrets")," to several Deployments\uff0cand then deploy Walrus following the steps for High Availability Installation. This ensures that kubelet can pull images from the private registry when creating Pods.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vim walrus.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\n...\nspec:\n  ...\n  template:\n    ...\n    spec:\n      containers:\n      ... \n      imagePullSecrets:\n      - name: registry-credential\n...\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f walrus.yaml\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Access the Walrus UI, and after the initial login, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<WALRUS_URL>/v1/settings"),". Validate whether the ",(0,i.kt)("inlineCode",{parentName:"li"},"ImageRegistry")," setting are effective.")),(0,i.kt)("h2",{id:"using-intranet-catalog"},"Using intranet catalog"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Disable the built-in catalog:")),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"System Settings")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Server Management"),", edit ",(0,i.kt)("inlineCode",{parentName:"p"},"Template Catalog Settings"),", disable ",(0,i.kt)("inlineCode",{parentName:"p"},"Use built-in catalog")," and save."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"If the intranet catalog uses an untrusted TLS certificate, you can disable Walrus's certificate verification for catalogs (optional):")),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"System Settings")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Server Management"),", edit ",(0,i.kt)("inlineCode",{parentName:"p"},"Certificate Settings"),", enable ",(0,i.kt)("inlineCode",{parentName:"p"},"Skip certificate authentication")," and save."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Remove the built-in catalog and add the intranet catalog:")),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Operations")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Catalogs"),", check the ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin")," catalog, and choose to delete it."),(0,i.kt)("p",null,"And then choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Catalog"),", enter the catalog's name, description, source and choose type. For the source address, provide the complete git organization/group URL of the intranet catalog, such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/walrus-catalog"},"https://github.com/walrus-catalog"),". Confirm and save."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create",src:a(60551).Z,width:"3352",height:"1650"})),(0,i.kt)("p",null,"Confirm that the intranet catalog is refreshing correctly. Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Operations")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Templates")," and verify that the templates load successfully."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"OpenAI-related features (AI Draft Template) are not available in offline environments."),(0,i.kt)("li",{parentName:"ul"},"If custom connectors are required, i.e., custom Terraform Providers, it's necessary to configure the mirror for the custom provider. Refer to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://developer.hashicorp.com/terraform/cli/commands/providers/mirror")," for guidance."))))}d.isMDXComponent=!0},60551:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-en-67dac02511bd2ad7334959540c92393e.png"}}]);