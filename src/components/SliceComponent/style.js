import slider from "react-slick/lib/slider";
import styled from "styled-components";

export const WrapperSlider = styled(slider)`
  & .Slick-arrow.slick-prev {
    left: 12px;
    top: 50%;
    z-index: 10;
    &:: before {
      font-size: 40px;
      color: #fff;
    }
  }

  & .slick-arrow.slick-next {
    right: 28px;
    top: 50%;
    z-index: 10;
    &:: before {
      font-size: 40px;
      color: #fff;
    }
  }

  & .slick-dots {
    z-index: 10;
    bottom: -2px !important;
    li {
      button {
        &:: before {
          color: rgb(255, 255, 0.5);
        }
      }
    }
    li.active {
      button {
        &::beforce {
          color: #fff;
        }
      }
    }
  }
`;
