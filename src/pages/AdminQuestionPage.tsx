const AdminQuestionPage = () => {
  return (
    <section className="admin-question-area">
      <div className="section__heading">
        <h1 className="font--24">Admin - Questions</h1>
        <button className="custom__btn custom__btn--default">Create new</button>
      </div>

      <div className="search-area">
        <div className="search__input">
          <input
            type="text"
            className="input__style-search"
            placeholder="Search question.."
          />

          <button className="search__input-icon">
            <img src="/images/search.svg" alt="" />
          </button>
        </div>

        <button className="filter-btn">
          <img src="/images/filter.svg" alt="filter" />
        </button>
      </div>

      {/* Question Items */}
      <div className="question__items">
        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <h2 className="font--16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit amet?
            </h2>

            <div className="question__item-categories">
              <button className="question__item-category">Category</button>
              <button className="question__item-category">Sub Category</button>
              <button className="question__item-category">Type</button>
            </div>
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

export default AdminQuestionPage;
