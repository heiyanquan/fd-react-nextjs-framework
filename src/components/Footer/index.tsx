import Image from "next/image"
import { FC, memo } from "react"

const Footer: FC = () => {
  return (
    <div className="common-footer-wrapper">
      <main className="flex">
        <div className="jss318">
          <div className="jss320">
            <span>支持</span>
            <a className="jss321" role="link" target="_self" href="/CN/zh/support/customer-support/web-training">
              <span>网站教程</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/support/customer-support">
              <span>客户支持</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/search">
              <span>安全数据说明书(SDS)</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/search">
              <span>证书 (COA/COO)</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/life-science/quality-and-regulatory-management">
              <span>质量与法规</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/support/calculators-and-apps">
              <span>计算和相关 App</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/collections/webinars">
              <span>网上研讨会</span>
            </a>
          </div>
          <div className="jss320">
            <span>订单</span>
            <a className="jss321" role="link" target="_self" href="/CN/zh/quick-order">
              <span>快速下单</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/services/custom-products">
              <span>定制产品</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/support/customer-support/after-sales">
              <span>订单售后</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/life-science/ecommerce/ecommerce-solutions">
              <span>电子商务解决方案</span>
            </a>
            <a className="jss321" role="link" target="_blank" rel="noopener" href="https://open.sigmaaldrich.cn/">
              <span>B2B客户开放平台</span>
            </a>
          </div>
          <div className="jss320">
            <span>公司</span>
            <a className="jss321" role="link" target="_self" href="/CN/zh/life-science/about-us">
              <span>关于我们</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/life-science/ssbi">
              <span>责任</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/collections/events">
              <span>活动</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/collections/press">
              <span>新闻稿</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/life-science/partnership-programs">
              <span>项目计划</span>
            </a>
            <a className="jss321" role="link" target="_blank" rel="noopener" href="https://www.emdgroup.com/en/careers.html">
              <span>招聘</span>
            </a>
            <a className="jss321" role="link" target="_self" href="/CN/zh/collections/offices">
              <span>办事处</span>
            </a>
          </div>
          <div className="jss320">
            <span>社交媒体</span>
            <div className="jss322">
              <div className="jss323">
                <a href="/CN/zh" target="_self">
                  <Image
                    src="/deepweb/assets/sigmaaldrich/marketing/china/life-science/about-us/social-icon/WeChat/WeChat.png"
                    alt="WeChat Icon"
                    className="jss335"
                    width="32"
                    height="32"
                  />
                </a>
              </div>
              <div className="jss323">
                <a href="https://space.bilibili.com/488496232" target="_blank" rel="noopener">
                  <Image
                    src="/deepweb/assets/sigmaaldrich/marketing/china/life-science/about-us/social-icon/bilibili/bilibili.png"
                    alt="Bilibili Icon"
                    className="jss335"
                    width="32"
                    height="32"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="jss319"></div>
          <div className="jss324">
            <span>默克</span>
            <div>
              <span>
                <p>
                  <b>研究、开发、生产</b>
                  <br />
                </p>
                <p>作为生命科学行业的全球领先供应商，我们致力于为研究、生物技术开发和生产，以及制药药物疗法开发和生产提供各类解决方案和服务。</p>
                <p>
                  <b>商务/技术咨询：</b>
                  <br />
                  8008193336（支持座机拨打）
                  <br />
                  4006203333（支持手机拨打）
                </p>
                <p>
                  <b>
                    订购/客服Email：
                    <br />
                  </b>
                  ordercn@merckgroup.com
                </p>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default memo(Footer)
