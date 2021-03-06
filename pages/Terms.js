import React from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Demo from '../components/Demo';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FooterLinks from '../components/FooterLinks';
import Link from 'next/link';
import Aux from './hoc/Aux_';
import Includes from '../components/Includes';

class Terms extends React.Component {
  render() {
  	return (
        <Aux>
          <Includes />
          <Navbar />
          <section className="privacy">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="title">Terms and Conditions page</h3>
                  <p><br/><br/>
                    These terms and conditions ("Terms", "Agreement") are an agreement between Syntervision ("Syntervision", "us", "we" or "our") and you ("User", "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the <a href="http://syntervision.com/">syntervision.com</a> website and any of its products or services (collectively, "Website" or "Services").
                  </p>
                  <br/><br/>

                  <div id="content1" className="content-title">
                    <h4>Billing and payments</h4>

                    <p>You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. Where Services are offered on a free trial basis, payment may be required after the free trial period ends, and not when you enter your billing details (which may be required prior to the commencement of the free trial period). Sensitive and private data exchange between the Website and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures. If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to provide us with a copy of your valid government-issued photo identification, and possibly a copy of a recent bank statement for the credit or debit card used for the purchase.</p>
                  </div>
                  <div id="content2" className="content-title">
                    <h4>Accuracy of information</h4>
                    <p>Occasionally there may be information on the Website that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, availability, promotions and offers. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information on the Website or on any related Service is inaccurate at any time without prior notice (including after you have submitted your order). We undertake no obligation to update, amend or clarify information on the Website including, without limitation, pricing information, except as required by law. No specified update or refresh date applied on the Website should be taken to indicate that all information on the Website or on any related Service has been modified or updated.
                    </p>
                  </div>
                  <div id="content3" className="content-title">
                    <h4>Backups</h4>
                    <p>We are not responsible for Content residing on the Website. In no event shall we be held liable for any loss of any Content. It is your sole responsibility to maintain appropriate backup of your Content. Notwithstanding the foregoing, on some occasions and in certain circumstances, with absolutely no obligation, we may be able to restore some or all of your data that has been deleted as of a certain date and time when we may have backed up data for our own purposes. We make no guarantee that the data you need will be available.
                    </p>
                  </div>
                  <div id="content4" className="content-title">
                    <h4>Prohibited uses</h4>
                    <p>In addition to other terms as set forth in the Agreement, you are prohibited from using the Website or its Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. </p>
                  </div>
                  <div id="content5" className="content-title">
                    <h4>Intellectual property rights</h4>
                    <p>This Agreement does not transfer to you any intellectual property owned by Syntervision or third-parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with Syntervision. All trademarks, service marks, graphics and logos used in connection with our Website or Services, are trademarks or registered trademarks of Syntervision or Syntervision licensors. Other trademarks, service marks, graphics and logos used in connection with our Website or Services may be the trademarks of other third-parties. Your use of our Website and Services grants you no right or license to reproduce or otherwise use any Syntervision or third-party trademarks.</p>

                  </div>
                  <div id="content6" className="content-title">
                    <h4>Limitation of liability</h4>
                    <p>To the fullest extent permitted by applicable law, in no event will Syntervision, its affiliates, officers, directors, employees, agents, suppliers or licensors be liable to any person for (a): any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use or content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if Syntervision has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of Syntervision and its affiliates, officers, employees, agents, suppliers and licensors, relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to Syntervision for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.</p>
                  </div>
                  <div id="content7" className="content-title">
                    <h4>Indemnification</h4>
                    <p>You agree to indemnify and hold Syntervision and its affiliates, directors, officers, employees, and agents harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website or Services or any willful misconduct on your part.</p>
                  </div>
                  <div id="content8" className="content-title">
                    <h4>Severability</h4>
                    <p>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</p>
                  </div>
                  <div id="content9" className="content-title">
                    <h4>Dispute resolution</h4>
                    <p>The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Alabama, United States without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of United States. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the state and federal courts located in Alabama, United States, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.</p>

                  </div>

                  <div id="content10" className="content-title">
                    <h4>Assignment</h4>
                    <p>You may not assign, resell, sub-license or otherwise transfer or delegate any of your rights or obligations hereunder, in whole or in part, without our prior written consent, which consent shall be at our own sole discretion and without obligation; any such assignment or transfer shall be null and void. We are is free to assign any of its rights or obligations hereunder, in whole or in part, to any third-party as part of the sale of all or substantially all of its assets or stock or as part of a merger.</p>
                  </div>
                  <div id="content11" className="content-title">
                    <h4>Changes and amendments</h4>
                    <p>We reserve the right to modify this Agreement or its policies relating to the Website or Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes.</p>
                  </div>
                  <div id="content12" className="content-title">
                    <h4>Acceptance of these terms</h4>
                    <p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Website and its Services.</p>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
          </section>
          <Demo />

          <Contact />

          <SocialMedia />

          <Footer />

          <FooterLinks />
        </Aux>
  	);
  }
}
export default Terms;
