import React, { useEffect } from "react";
import styled from "styled-components";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Title from "../../components/ui/Title";

import ProjectsListComponent from "../../components/ui/BrandsItemComponent";

import icondb from "../../assets/images/projects/icondb logo.png";

export default function Icondb() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <SeconraryHeader className="container responsivegrid secondary-header-logo">
            <div className="cmp-container">
              <div className="adaptiveImage image no-renditions">
                <div className="cmp-adaptive-image cmp-image">
                  <picture className="visible loaded">
                    <img
                      src={icondb}
                      alt="icondb 로고"
                      className="cmp-image__image"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </SeconraryHeader>
          <div className="container responsivegrid">
            <div className="cmp-container" />
          </div>
          <div className="container responsivegrid">
            <div className="cmp-container">
              <TeaserHero className="teaser hero hero--normal">
                <div className="cmp-teaser">

                </div>
              </TeaserHero>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const SeconraryHeader = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 14px 16px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  height: 88px;
  margin-left: -24px;
  width: calc(100vw - var(--scrollWidth));

  .image {
    height: 88px;
    margin: 0;
  }

  .cmp-image {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  .cmp-image__image {
    height: 100%;
    max-height: 56px;
    width: auto;
  }

  @media only screen and (min-width: 1200px) {
    height: 96px;
    margin-left: calc((1120px - 100vw + var(--scrollWidth)) / 2);

    .image {
      height: 96px;
      margin: 0;
    }

    .cmp-image__image {
      max-height: 64px;
    }
  }
`;

const TeaserHero = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  padding: 0 24px;
  width: min(100vw - var(--scrollWidth), 1440px);

  .cmp-teaser {
    border-radius: 16px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 599px;
    overflow: hidden;
    }

  @media only screen and (min-width: 1200px) {
    margin-left: calc((1120px - min(100vw - var(--scrollWidth), 1440px)) / 2);
    margin-top: 32px;

    .cmp-teaser {
        margin: 0 auto;
        max-width: 1280px;
        width: 100%;
    }
  }
`;
