### Part 3.2 Terraform AWS Infrastructure Deployment

1. create a rest-server.tf file to define the aws resource in the same rest-api project and use the below code 

```
provider "aws" {
  region = "your_aws_region"
}

resource "aws_instance" "rest-api-server" {
  ami           = "ami-0cd59ecaf368e5ccf"  # Use your desired AMI ID
  instance_type = "t2.micro"
  user_data = file ("${path.module}/rest-api.sh")
  security_groups = [aws_security_group.rest-api.name]
  key_name = var.key_pair
}

variable "key_pair" {
  description = "SSH Key pair name to ingest into EC2"
  type        = string
  default     = "your-key-pair"
  sensitive   = true
}

resource "aws_security_group" "rest-api" {
  name        = "allow_http_https"
  description = "Allow incoming HTTP and HTTPS traffic"

  ingress {
    description      = "TLS from VPC"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  
  }

  ingress {
    description      = "TLS from VPC"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  
  }

  ingress {
    description      = "TLS from VPC"
    from_port        = 3000
    to_port          = 3000
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  
  }

  ingress {
    description      = "TLS from VPC"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
  }
}

```

* `rest-api.sh` passed as userdata
```
#!/bin/bash

sudo apt-get update

sudo aptinstall nodejs npm -y

sudo npm init -y

sudo npm install express -y

```

2. Download and install Terraform from the [Terraform official website](https://www.terraform.io/downloads.html)

3. Configure your credentials using either environment variables, AWS CLI, or create a role with neccessary permission and attach it to your host
to avoid hardcoding your credentials to your code

4. In your terminal, navigate to the directory containing your Terraform configuration files (rest-server.tf) and run:

   `terraform init`

5. Generate and review the Terraform plan to verify the changes that will be applied using: 
   
   `terraform plan`

6. If the plan looks correct, apply it to create the infrastructure using:

    `terraform apply`

7. When prompted, type `yes` to confirm and apply the changes.


8. After applying the Terraform configuration, monitor the AWS Management Console or use AWS CLI to verify that the resources have been provisioned successfully.
 

