import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトは
              <a
                href="https://twitter.com/kiichi_sugihara"
                target="_blank"
                rel="noopener noreferrer"
              >
                kii
              </a>
              が書いているブログを一覧にして表示します。
            </p>
            <p>
              更新頻度が高い
              <a
                href="https://scrapbox.io/kii-cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrapbox
              </a>
              は表示していないので、気になれば閲覧してみてください。
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
