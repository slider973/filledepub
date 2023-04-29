import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function faq() {
  return (
    <Layout>
      <Breadcrumb pageName="FAQ’s" pageTitle="FAQ’s" />
      <div class="faq-page pt-120 mb-120">
        <div class="container">
          <div class="row g-lg-4 gy-5">
            <div class="col-lg-6">
              <div class="genarel-qustions-area">
                <h4>General Questions</h4>

                <div class="accordion" id="accordionExample">
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What services do job agencies offer?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        A job agency, also known as an employment agency or
                        staffing agency, is a company that helps match job
                        seekers with the employers job agencies specialize.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How do job agencies match job seekers with employers?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,{" "}
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Are job agencies regulated by any government agency?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What are some of the best job agencies?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can I find permanent job by using a job agency?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Do job agencies only provide jobs for short-term?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="genarel-qustions-area">
                <h4>Payment Question</h4>

                <div class="accordion" id="accordionExample2">
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingOne2">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne2"
                        aria-expanded="true"
                        aria-controls="collapseOne2"
                      >
                        Do easy to use Interface for job seekers and employers?
                      </button>
                    </h2>
                    <div
                      id="collapseOne2"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        A job agency, also known as an employment agency or
                        staffing agency, is a company that helps match job
                        seekers with the employers job agencies specialize.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingTwo2">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo2"
                      >
                        Do multiple payment options?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,{" "}
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingThree2">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree2"
                        aria-expanded="false"
                        aria-controls="collapseThree2"
                      >
                        Does Report and Analytic for financial monitoring?
                      </button>
                    </h2>
                    <div
                      id="collapseThree2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingFour2">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour2"
                        aria-expanded="false"
                        aria-controls="collapseFour2"
                      >
                        Automated payment reminders and follow-ups?
                      </button>
                    </h2>
                    <div
                      id="collapseFour2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-20">
                    <h2 class="accordion-header" id="headingFive2">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive2"
                        aria-expanded="false"
                        aria-controls="collapseFive2"
                      >
                        Can I find permanent job by using a job agency?
                      </button>
                    </h2>
                    <div
                      id="collapseFive2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix2">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix2"
                        aria-expanded="false"
                        aria-controls="collapseSix2"
                      >
                        Do job agencies only provide jobs for short-term?
                      </button>
                    </h2>
                    <div
                      id="collapseSix2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default faq;
