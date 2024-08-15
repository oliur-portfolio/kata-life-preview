const AdminActivityPage = () => {
  return (
    <section className="admin-question-area">
      <div className="section__heading">
        <h1 className="font--24">Admin - Activity types</h1>
        <button className="custom__btn custom__btn--default">Create new</button>
      </div>

      {/* Question Items */}
      <div className="question__items question__items-activity">
        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--published">
                Published
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--draft">
                Draft
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--deprecated">
                Deprecated
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--published">
                Published
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}
      </div>
      {/* Question Items */}
    </section>
  );
};

export default AdminActivityPage;
