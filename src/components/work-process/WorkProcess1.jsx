import Link from "next/link";

function WorkProcess1() {
  return (
    <div className="home1-work-process mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <h2>
               JOBES  Working <span>Process</span>
              </h2>
              <p>
                To choose your trending job dream &amp; to make future bright.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-lg-4 gy-5 justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-work-process one text-center">
              <div className="icon">
                <img src="assets/images/icon/account-create.svg" alt="" />
              </div>
              <div className="work-content">
                <h5>
                  <Link legacyBehavior href="/register">
                    <a>Account Create</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-work-process two text-center">
              <div className="icon">
                <img src="assets/images/icon/create-resume.svg" alt="" />
              </div>
              <div className="work-content">
                <h5>
                  <Link legacyBehavior href="/edit-profile">
                    <a>Create Resume</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-work-process one text-center">
              <div className="icon">
                <img src="assets/images/icon/job-find.svg" alt="" />
              </div>
              <div className="work-content">
                <h5>
                  <Link legacyBehavior href="/job-listing1">
                    <a>Find Jobs</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-work-process two text-center">
              <div className="icon">
                <img src="assets/images/icon/job-apply.svg" alt="" />
              </div>
              <div className="work-content">
                <h5>
                  <Link legacyBehavior href="/job-listing1">
                    <a>Apply Jobs</a>
                  </Link>
                </h5>
                <p>To create your account be confident &amp; safely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess1;
