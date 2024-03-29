---
sidebar_position: 1000
---


# 自定义

自定义连接器可以定义部署第三方平台应用如：AWS, 阿里云。

## 查看列表

1. 点击菜单`运维中心` -> `连接器` -> `自定义` Tab 可查看连接器列表。

## 创建自定义连接器

1. 点击列表`新建连接器`。
2. 类型为第三方平台 Terraform Provider 的类型，如：aws, alicloud。
3. 添加属性，例如：Provider 为 [alicloud](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs),则需填写 access_key，secret_key，region。

```
provider "alicloud" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}
```

4. `保存`可创建自定义连接器。

## 查看、编辑连接器

1. 点击列表中`连接器名称`可查看详情。
2. 详情页中点击`编辑`可进入编辑状态。

## 删除连接器

> 注：在删除连接器前，需要确认当前没有环境依赖该连接器。

1. 列表中选中要删除的连接器，点击`删除`按钮，确认即可删除。

## 使用方法

### 以 alicloud 为例：

1. 自定义连接器创建成功后。
2. 在`运维中心`->`环境`详情中添加相应的连接器。
3. 在`运维中心`->`模块`中创建相应的 Terraform 模块。
4. 模块可自己编写，也可以通过`AI 编写模块`编写相应的 Terraform 的配置。
5. 编辑 AI 生成的配置，并确认后可`创建 PR`提交到相应的`版本控制`平台（需先在`连接器`创建`版本控制`连接器）。
6. 在`运维中心`->`模块`中创建模块来源为步骤 5 中的提交路径。
7. `应用管理`中`新建应用`中可以添加相应的模块，并部署实例。
