import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white mt-[100px] pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-50 shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Terms & Agreement</h1>
          <div className="space-y-6 text-gray-700">
            
            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">1. Scope of Work</h2>
              <p>
                HyperDigital agrees to provide the following services, as described in the approved proposal:
                <ul className="list-disc pl-5">
                  <li>Website Development</li>
                  <li>Application Development</li>
                  <li>SaaS Solutions</li>
                  <li>Digital Marketing Services, including SEO, social media management, and lead generation.</li>
                </ul>
                Any additional services outside the agreed scope will require a separate written agreement and may involve additional charges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">2. Payment Terms</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Fees:</strong> The total project fee is specified in the proposal. This amount is subject to change based on any project revisions or expansions agreed to in writing by both parties.</li>
                  <li><strong>Payment Schedule:</strong>
                    <ul className="list-disc pl-5">
                      <li>50% of the total project cost is due upon signing this Agreement.</li>
                      <li>30% is due at the project&apos;s midway point (as outlined in the project timeline).</li>
                      <li>The final 20% is due upon project completion and approval.</li>
                    </ul>
                  </li>
                  <li><strong>Late Payments:</strong> Invoices must be paid within 15 business days of receipt. Any late payments will incur a fee of 5% per month of the outstanding balance.</li>
                  <li><strong>Refund Policy:</strong> Payments for completed project phases are non-refundable. Refunds will only be offered if a deliverable cannot be completed due to fault by HyperDigital.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">3. Project Timeline</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Start Date:</strong> The project will begin upon receipt of the initial deposit.</li>
                  <li><strong>Completion Date:</strong> HyperDigital will make reasonable efforts to meet all project deadlines, provided the Client meets their deadlines for feedback, approvals, and submission of necessary content.</li>
                  <li><strong>Delays:</strong> In case of delays caused by the Client, HyperDigital reserves the right to adjust the project timeline accordingly without penalties.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">4. Client Responsibilities</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Content Submission:</strong> The Client is responsible for providing all text, images, and other required content in a timely manner to prevent delays.</li>
                  <li><strong>Feedback & Approvals:</strong> The Client must review and approve deliverables within 5 business days of receipt. Failure to respond within this timeframe will be deemed as acceptance of the deliverable.</li>
                  <li><strong>Communication:</strong> The Client agrees to maintain regular communication and provide timely feedback to ensure the project runs smoothly.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">5. Revisions</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Included Revisions:</strong> The project includes up to 3 rounds of revisions at no additional cost.</li>
                  <li><strong>Additional Revisions:</strong> Any revisions beyond the included rounds will be billed at an hourly rate of [Rate] per hour.</li>
                  <li><strong>Major Changes:</strong> Major changes that alter the project&apos;s scope, structure, or functionalities after final approval of deliverables will require a new agreement and additional charges.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">6. Intellectual Property</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Ownership:</strong> Upon full payment, the Client will own the final deliverables, including websites, applications, and marketing materials.</li>
                  <li><strong>Third-Party Assets:</strong> Any third-party software, plugins, fonts, or other materials used in the project will be licensed to the Client as per the respective vendor’s terms.</li>
                  <li><strong>Portfolio Use:</strong> HyperDigital retains the right to showcase the project in its portfolio, case studies, or promotional materials unless otherwise objected to in writing by the Client.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of all proprietary or sensitive information exchanged during the course of this project. This includes, but is not limited to, business strategies, financial data, trade secrets, and technical processes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">8. Account Ownership and Credentials</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Ownership of Accounts:</strong> Any accounts created on behalf of the Client for digital platforms or other purposes during the project (e.g., social media accounts, SaaS platforms) remain the sole property of HyperDigital. While the Client may use these accounts, ownership is retained by HyperDigital and can be revoked, altered, or terminated at its sole discretion.</li>
                  <li><strong>Access Credentials:</strong> HyperDigital retains the right to manage or revoke access credentials (including usernames and passwords) associated with accounts it has created. HyperDigital reserves the right to take such actions without prior notice if necessary to protect the platform, the Client, or other users.</li>
                  <li><strong>Account Modifications and Termination:</strong> HyperDigital reserves the right to modify, delete, or restrict access to any account or content associated with the project, without reason or prior notice. HyperDigital will not be held liable for loss of data, followers, or business resulting from account suspension or termination.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">9. Warranty & Liability</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Workmanship Warranty:</strong> HyperDigital guarantees that all work will meet industry standards. Any bugs or technical issues discovered within 30 days of project completion will be resolved free of charge.</li>
                  <li><strong>Limitation of Liability:</strong> HyperDigital will not be liable for any damages, loss of profits, or data issues arising from the use of the final deliverables, except in cases of proven negligence. HyperDigital&apos;s maximum liability is limited to the total project cost.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">10. Termination</h2>
              <p>
                <ul className="list-disc pl-5">
                  <li><strong>Client Termination:</strong> The Client may terminate this Agreement at any time by providing 15 days&apos; written notice. The Client will be billed for all work completed up to the termination date.</li>
                  <li><strong>Service Provider Termination:</strong> HyperDigital reserves the right to terminate this Agreement in cases of non-payment, breach of terms, or unresponsiveness. HyperDigital will notify the Client of any such issues before termination.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">11. Governing Law</h2>
              <p>
                This Agreement is governed by the laws of India. Any disputes arising under this Agreement will be resolved through mediation or, if necessary, arbitration in Mumbai, India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">12. Entire Agreement</h2>
              <p>
                This Agreement, together with the attached proposal and any written amendments, constitutes the entire understanding between HyperDigital and the Client. Any modifications to this Agreement must be made in writing and signed by both parties.
              </p>
            </section>

            <div className="pt-6 text-center">
              <p className="mb-4 text-purple-700">By using our services and this website, you agree to these terms and conditions.</p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
