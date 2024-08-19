import { useState } from "react";
import { Collapse } from "react-collapse";

const ActivityPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="admin-question-area">
      <div className="section__heading">
        <div className="section__heading-label">
          <h1 className="font--24">Activity name</h1>
          <span className="custom__btn custom__btn--label">Published</span>
        </div>
      </div>

      <div className="section__desc">
        <p>
          Activity type description - lorem ipsum dolar amet, lorem ipsum dolar
          ametlorem ipsum dolar amet lorem ipsum dolar amet lorem ipsum dolar
          ametlorem ipsum dolar amet
        </p>
      </div>

      <div className="accordion-container">
        {/* Level 1 Accordion */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(1)}>
            <div className="accordion-header__name">
              <h3 className="font--18">Level 1</h3>

              {openIndex === 1 && (
                <button className="accordion-header__delete-btn">
                  <img src="/images/delete.svg" alt="delete" />
                </button>
              )}
            </div>

            <img
              className="accordion-header__arrow"
              src={
                openIndex === 1
                  ? "/images/accordion-arrow-up.svg"
                  : "/images/accordion-arrow-down.svg"
              }
              alt="Arrow"
            />
          </div>

          <Collapse isOpened={openIndex === 1}>
            <div className="accordion-body">
              <div className="accordion-body__content">
                <div className="accordion-body__header">
                  <h3 className="font--16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ipsum dolor sit amet?
                  </h3>

                  <span className="accordion-body__label custom__btn custom__btn--label">
                    Type
                  </span>

                  <button className="accordion-header__delete-btn">
                    <img src="/images/delete.svg" alt="delete" />
                  </button>
                </div>

                <div className="accordion-body__details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dapibus euismod iaculis lectus massa risus sit ac massa,
                    vitae.
                  </p>
                </div>

                <div className="level__rating-area">
                  <p className="font--16">Level up Rating (4.5)</p>

                  <div className="level__rating">
                    <div className="level__rating-value">
                      <img src="/images/rating-star.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
        {/* Level 1 Accordion */}

        {/* Level 2 Accordion */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(2)}>
            <div className="accordion-header__name">
              <h3 className="font--18">Level 2</h3>

              {openIndex === 2 && (
                <button className="accordion-header__delete-btn">
                  <img src="/images/delete.svg" alt="delete" />
                </button>
              )}
            </div>

            <img
              className="accordion-header__arrow"
              src={
                openIndex === 2
                  ? "/images/accordion-arrow-up.svg"
                  : "/images/accordion-arrow-down.svg"
              }
              alt="Arrow"
            />
          </div>

          <Collapse isOpened={openIndex === 2}>
            <div className="accordion-body">
              <div className="accordion-body__content">
                <div className="accordion-body__header">
                  <h3 className="font--16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ipsum dolor sit amet?
                  </h3>

                  <span className="accordion-body__label custom__btn custom__btn--label">
                    Type
                  </span>

                  <button className="accordion-header__delete-btn">
                    <img src="/images/delete.svg" alt="delete" />
                  </button>
                </div>

                <div className="accordion-body__details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dapibus euismod iaculis lectus massa risus sit ac massa,
                    vitae.
                  </p>
                </div>

                <div className="level__rating-area">
                  <p className="font--16">Level up Rating (4.5)</p>

                  <div className="level__rating">
                    <div className="level__rating-value">
                      <img src="/images/rating-star.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
        {/* Level 2 Accordion */}

        {/* Level 3 Accordion */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(3)}>
            <div className="accordion-header__name">
              <h3 className="font--18">Level 3</h3>

              {openIndex === 3 && (
                <button className="accordion-header__delete-btn">
                  <img src="/images/delete.svg" alt="delete" />
                </button>
              )}
            </div>

            <img
              className="accordion-header__arrow"
              src={
                openIndex === 3
                  ? "/images/accordion-arrow-up.svg"
                  : "/images/accordion-arrow-down.svg"
              }
              alt="Arrow"
            />
          </div>

          <Collapse isOpened={openIndex === 3}>
            <div className="accordion-body">
              <div className="accordion-body__content">
                <div className="accordion-body__header">
                  <h3 className="font--16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ipsum dolor sit amet?
                  </h3>

                  <span className="accordion-body__label custom__btn custom__btn--label">
                    Type
                  </span>

                  <button className="accordion-header__delete-btn">
                    <img src="/images/delete.svg" alt="delete" />
                  </button>
                </div>

                <div className="accordion-body__details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dapibus euismod iaculis lectus massa risus sit ac massa,
                    vitae.
                  </p>
                </div>

                <div className="level__rating-area">
                  <p className="font--16">Level up Rating (4.5)</p>

                  <div className="level__rating">
                    <div className="level__rating-value">
                      <img src="/images/rating-star.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
        {/* Level 3 Accordion */}
      </div>
    </section>
  );
};

export default ActivityPage;
