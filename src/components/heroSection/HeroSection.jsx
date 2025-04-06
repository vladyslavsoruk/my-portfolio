import "./heroSection.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function HeroSection() {
  return (
    <div className="hero">
      <div className="heroSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="heroTitle"
        >
          Hey there
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80px"
            height="80px"
            viewBox="0 0 80 80"
            fill="none"
            style={{ position: "relative", top: "10px" }}
          >
            <path
              d="M26.5009 61.621C26.453 61.621 26.4007 61.6123 26.3484 61.5992C21.1 59.9994 15.4158 54.2629 14.1822 49.324C14.1124 49.0451 14.2824 48.7661 14.557 48.6963C14.836 48.6266 15.115 48.7966 15.1848 49.0712C16.3225 53.6264 21.7888 59.1232 26.6491 60.6097C26.9238 60.6925 27.0763 60.9802 26.9935 61.2548C26.9281 61.4771 26.7232 61.621 26.5009 61.621Z"
              fill="#975500"
            />
            <path
              d="M29.003 68.1292C28.9638 68.1292 28.9246 68.1249 28.8853 68.1161C24.5437 67.1048 19.4959 63.8617 15.0409 59.2149C10.8736 54.8733 8.17534 50.2526 8.00098 47.1577C7.98354 46.8743 8.20149 46.6259 8.48919 46.6128C8.77253 46.5954 9.021 46.8133 9.03408 47.101C9.19101 49.917 11.8413 54.3894 15.7863 58.5C20.1061 63.0073 24.9665 66.1415 29.1207 67.1092C29.3997 67.1746 29.5741 67.4536 29.5087 67.7325C29.452 67.9679 29.2384 68.1292 29.003 68.1292Z"
              fill="#975500"
            />
            <path
              d="M51.2562 22.834C51.0252 22.834 50.8159 22.6815 50.7549 22.4504C50.0269 19.6868 46.7184 15.72 43.7063 14.9441C43.4317 14.8743 43.2616 14.591 43.3358 14.312C43.4099 14.033 43.6888 13.8674 43.9678 13.9415C47.3592 14.8177 50.9423 19.0939 51.7575 22.1889C51.8316 22.4635 51.666 22.7468 51.387 22.8209C51.3434 22.8297 51.2998 22.834 51.2562 22.834Z"
              fill="#975500"
            />
            <path
              d="M57.7816 23.7536C57.5506 23.7536 57.3413 23.5967 57.2803 23.3656C55.3405 15.7285 48.087 9.76966 43.9459 9.02862C43.6625 8.97631 43.4794 8.71041 43.5274 8.42707C43.5797 8.14372 43.8456 7.96064 44.1289 8.00859C48.6406 8.81938 56.208 14.9613 58.2829 23.1084C58.3526 23.3874 58.187 23.6664 57.908 23.7362C57.8644 23.7492 57.8252 23.7536 57.7816 23.7536Z"
              fill="#975500"
            />
            <path
              d="M44.9005 37.3237C45.7331 38.2434 46.4829 39.4509 46.1646 39.7691C45.8464 40.0873 44.87 39.5119 44.1246 38.7621C43.3792 38.0167 41.5963 45.9503 41.422 46.3513C41.2912 46.6521 39.2163 49.0321 38.1309 51.2945C37.7691 52.0486 37.8214 54.3241 37.6862 54.4592C37.1414 55.0041 36.4483 54.9474 34.9531 53.6266C33.4579 52.3058 32.682 60.1739 34.4649 61.4163C37.5119 63.5435 43.6059 71.9958 51.6571 71.9958C60.9724 71.9958 69.5991 62.2794 69.5991 55.1479C69.5991 48.0165 67.5067 45.3138 67.6462 39.3375C67.7595 34.2767 71.4429 31.8617 71.4429 29.3335C71.4429 27.2062 68.2826 26.6875 67.2452 26.6875C65.4056 26.6875 60.6891 29.0458 60.6891 35.2531C60.6891 37.668 60.0004 39.8519 57.5288 39.8519C55.0572 39.8519 52.2979 36.4606 50.6283 33.8146"
              fill="url(#paint0_linear)"
            />
            <path
              d="M71.4388 29.3335C71.4388 28.1784 70.5016 27.4983 69.4815 27.1147C70.7064 31.173 64.4948 31.3474 64.4948 45.1744C64.4948 59.0014 56.4435 63.0248 53.1088 63.7179C49.7741 64.4067 43.8981 64.6072 39.4257 59.1191C38.0526 57.4321 36.1913 55.6013 34.1207 53.8708C33.2445 55.3311 33.0571 60.4356 34.4651 61.4163C37.5121 63.5436 43.606 71.9958 51.6573 71.9958C60.9726 71.9958 69.5992 62.2794 69.5992 55.148C69.5992 48.0165 67.5069 45.3139 67.6464 39.3376C67.7597 34.2767 71.4388 31.8618 71.4388 29.3335Z"
              fill="url(#paint1_linear)"
            />
            <path
              d="M34.9531 53.6267C33.458 52.3059 29.9227 48.5396 27.6212 46.6957C25.3196 44.8562 23.31 44.878 21.9282 46.9093C20.5464 48.9407 24.5742 52.5064 25.4939 53.4261C26.9019 54.8341 32.682 60.174 34.4649 61.4207"
              fill="url(#paint2_linear)"
            />
            <path
              d="M41.422 46.351C41.2476 46.7521 40.075 47.031 37.7429 44.4941C35.9601 42.5543 31.1869 36.979 28.3709 34.4507C25.5549 31.9225 23.3667 30.885 21.5271 32.2102C19.6876 33.5353 20.7338 36.2903 22.7913 38.5919C25.337 41.4383 28.2663 44.3415 31.0692 47.1313C33.2618 49.3108 38.2268 53.9184 37.6819 54.4633"
              fill="url(#paint3_linear)"
            />
            <path
              d="M31.0735 47.1271C33.1441 49.1846 37.6776 53.3998 37.7255 54.3283C38.3794 53.3083 37.185 50.2744 35.9208 49.2108C28.615 43.0601 21.5577 33.1432 20.6597 33.4396C20.2761 34.8825 21.2482 36.8615 22.7913 38.592C25.337 41.4342 28.2663 44.3417 31.0735 47.1271Z"
              fill="url(#paint4_linear)"
            />
            <path
              d="M50.624 33.819C48.9545 31.173 42.1107 22.6641 40.4455 20.2492C38.776 17.8342 36.5354 17.8342 34.9836 18.9284C33.4318 20.0225 32.9697 22.2064 36.4657 26.8488C38.6714 29.7781 40.5022 32.472 44.9049 37.328L50.0224 36.9706L50.624 33.819Z"
              fill="url(#paint5_linear)"
            />
            <path
              d="M44.1247 38.7622C43.3793 38.0168 36.7666 30.1792 35.2714 28.4966C32.4686 25.3493 28.9159 18.6058 24.6789 21.6092C22.4514 23.1872 23.6589 25.4757 24.2909 26.3955C24.923 27.3153 33.1442 36.805 33.9506 37.6071C34.7571 38.4135 41.5965 45.946 41.4265 46.347"
              fill="url(#paint6_linear)"
            />
            <path
              d="M44.9005 37.3233C45.7026 38.2082 46.4218 39.3546 46.1952 39.7252C48.8629 37.5805 43.2223 31.2773 40.0271 27.4936C37.5555 24.5643 36.8798 20.8373 35.11 18.8408C35.0664 18.867 35.0272 18.8975 34.9836 18.9236C33.4318 20.0178 32.9697 22.2017 36.4657 26.8441C38.667 29.7734 40.5022 32.4717 44.9005 37.3233Z"
              fill="url(#paint7_linear)"
            />
            <path
              d="M33.9462 37.6113C34.7526 38.4177 41.592 45.9502 41.422 46.3512C43.5361 43.5048 35.3411 35.1397 31.3743 30.9114C27.935 27.2454 27.3465 24.0371 23.99 22.2368C22.7433 23.7451 23.7328 25.5933 24.2864 26.3997C24.9185 27.3195 33.1441 36.8092 33.9462 37.6113Z"
              fill="url(#paint8_linear)"
            />
            <path
              d="M41.2693 46.5217C41.0296 46.6699 40.537 46.6829 39.7742 46.2427C40.3409 46.7004 40.8639 46.8747 41.2693 46.5217Z"
              fill="url(#paint9_linear)"
            />
            <path
              d="M67.729 27.5506C69.4857 27.2367 69.7952 27.4373 69.4813 27.1147C68.6269 26.7965 67.7115 26.6875 67.2408 26.6875C65.4012 26.6875 60.6847 29.0458 60.6847 35.2531C60.6847 37.668 59.996 39.8519 57.52 39.8519C56.5436 39.8519 55.5279 39.3245 54.5471 38.5224C58.8888 43.3305 62.2932 38.8014 62.8119 35.6977C63.3307 32.5941 62.5765 28.4747 67.729 27.5506Z"
              fill="url(#paint10_radial)"
            />
            <path
              d="M34.4518 19.3945C33.3795 20.6107 33.4144 22.7903 36.4614 26.8442C38.6671 29.7735 40.4979 32.4674 44.9006 37.3234C45.7331 38.2432 46.4829 39.4507 46.1647 39.7689C46.9014 34.7385 39.7394 29.7909 37.4117 25.9985C35.5678 22.9908 35.2016 21.2166 34.4518 19.3945Z"
              fill="url(#paint11_linear)"
            />
            <path
              d="M33.9462 37.6113C34.7526 38.4177 41.592 45.9502 41.422 46.3512C42.9302 45.2745 41.9015 43.5963 39.5694 41.2642C34.7875 36.4823 28.1312 30.057 25.4547 24.7651C25.2019 24.2638 24.7311 23.8933 24.1775 23.8235C22.7346 23.6361 23.807 25.6979 24.2908 26.3997C24.9185 27.3195 33.1441 36.8092 33.9462 37.6113Z"
              fill="url(#paint12_linear)"
            />
            <path
              d="M22.7913 38.5919C25.337 41.4384 28.2663 44.3415 31.0692 47.1314C33.2618 49.3109 38.2268 53.9184 37.6819 54.4633C40.7594 51.874 26.466 42.5151 20.6554 33.4438C20.2761 34.878 21.2482 36.8614 22.7913 38.5919Z"
              fill="url(#paint13_linear)"
            />
            <path
              d="M37.0543 54.9779C37.3463 54.8646 37.4989 54.7295 37.5468 54.5813C37.0194 54.9867 36.3263 54.8428 34.9532 53.6266C33.458 52.3058 29.9228 48.5396 27.6212 46.6957C26.6099 45.8893 25.6553 45.4403 24.7834 45.3618C26.0301 46.1421 25.4504 46.4211 28.2228 48.5483C29.7136 49.6904 35.1537 55.7233 37.0543 54.9779Z"
              fill="url(#paint14_linear)"
            />
            <path
              d="M33.4319 41.1772C35.4501 43.6357 39.3907 47.694 41.1605 46.5737C40.6723 46.7394 39.5607 46.4691 37.7473 44.4945C35.9645 42.5547 31.1913 36.9794 28.3753 34.4511C26.0955 32.4024 24.2255 31.3344 22.6213 31.7049C27.2899 33.2393 31.5182 38.8538 33.4319 41.1772Z"
              fill="url(#paint15_linear)"
            />
            <path
              d="M35.6158 30.5975C38.8371 34.1022 43.6191 41.055 46.0427 39.8388C45.646 39.9608 44.7916 39.4334 44.1247 38.7621C43.3793 38.0167 36.7666 30.1791 35.2714 28.4965C33.3273 26.3169 31.03 22.4112 28.3884 21.2168C31.0518 23.3179 33.0047 27.7598 35.6158 30.5975Z"
              fill="url(#paint16_linear)"
            />
            <path
              d="M54.5472 38.5266C54.5516 38.5266 54.5516 38.5266 54.5472 38.5266C53.0433 37.2973 51.631 35.4186 50.6197 33.8188C48.9545 31.1728 42.1108 22.6639 40.4456 20.249C39.9356 19.5123 39.3776 19.0023 38.7979 18.6797C39.5738 19.7956 40.014 21.3867 41.7707 23.357C44.5867 26.5173 48.2701 32.2103 49.5343 34.1675C50.794 36.116 52.8341 40.2397 54.5472 38.5266Z"
              fill="url(#paint17_linear)"
            />
            <path
              d="M63.7711 66.5906C62.7249 64.0449 61.1949 62.4931 58.9849 63.949C52.9562 67.9202 46.021 66.5776 37.3246 59.5507C29.5698 53.278 25.5594 48.7969 21.7845 47.1753C20.8778 49.2371 24.6092 52.5457 25.4897 53.4262C26.8977 54.8342 32.6778 60.1741 34.4607 61.4208C37.5077 63.548 43.6017 72.0002 51.6529 72.0002C56.1558 71.9959 60.4887 69.7335 63.7711 66.5906Z"
              fill="url(#paint18_linear)"
            />
            <path
              d="M67.642 39.3375C67.7553 34.2766 71.4388 31.8617 71.4388 29.3334C71.4388 28.588 71.0508 28.0432 70.5015 27.6465C71.1728 29.6168 69.5731 31.3648 67.1843 34.3377C64.595 37.559 64.024 42.5589 65.8025 47.5631C67.5853 52.5673 65.3404 59.4678 61.718 61.6517C58.0956 63.8356 53.2832 73.4386 39.5041 62.5889C39.4998 62.5845 39.4998 62.5845 39.4954 62.5801C38.6541 61.7999 37.8215 61.1068 36.9802 60.5837C31.1609 56.9787 27.8436 53.7356 25.3371 51.0112C24.8446 50.475 23.5194 48.4219 21.9414 49.0975C22.7304 50.8847 24.8533 52.7897 25.4897 53.4261C26.8977 54.8341 32.6778 60.1739 34.4607 61.4206C34.6917 61.5819 34.9445 61.7824 35.2104 62.0135C35.2802 62.0745 35.3499 62.1355 35.4197 62.1965C35.4371 62.214 35.4589 62.2314 35.4763 62.2445C35.5199 62.2837 35.5679 62.3273 35.6115 62.3666C35.6202 62.3753 35.6333 62.384 35.642 62.3971C37.451 64.0404 39.94 66.7605 42.9914 68.8834C42.9914 68.8834 42.9958 68.8834 42.9958 68.8877C43.2617 69.0752 43.5363 69.2583 43.8109 69.4326C43.8153 69.437 43.8196 69.437 43.824 69.4413C44.0986 69.6157 44.3776 69.7857 44.6566 69.947C44.6609 69.947 44.6609 69.9513 44.6653 69.9513C46.7751 71.1632 49.1159 72.0001 51.6442 72.0001C60.9595 72.0001 69.5861 62.2837 69.5861 55.1523C69.5861 48.0208 67.5069 45.3182 67.642 39.3375Z"
              fill="url(#paint19_radial)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="65.0704"
                y1="73.8405"
                x2="57.3943"
                y2="55.8565"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#FFCB4B" />
                <stop offset="1" stop-color="#FFD748" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="66.5983"
                y1="61.3326"
                x2="50.4983"
                y2="42.1276"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#FFCB4B" />
                <stop offset="1" stop-color="#FFD748" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="23.5643"
                y1="48.5465"
                x2="33.0518"
                y2="55.5328"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#FFCB4B" />
                <stop offset="1" stop-color="#FFD748" />
              </linearGradient>
              <linearGradient
                id="paint3_linear"
                x1="20.1097"
                y1="30.055"
                x2="36.756"
                y2="47.4775"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#FFCB4B" />
                <stop offset="1" stop-color="#FFD748" />
              </linearGradient>
              <linearGradient
                id="paint4_linear"
                x1="32.8886"
                y1="40.4011"
                x2="27.3859"
                y2="45.5848"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFA754" />
              </linearGradient>
              <linearGradient
                id="paint5_linear"
                x1="38.0895"
                y1="21.8354"
                x2="47.7495"
                y2="37.0154"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#FFCB4B" />
                <stop offset="1" stop-color="#FFD748" />
              </linearGradient>
              <linearGradient
                id="paint6_linear"
                x1="28.118"
                y1="24.3572"
                x2="41.228"
                y2="42.0672"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#FFCB4B" />
                <stop offset="1" stop-color="#FFD748" />
              </linearGradient>
              <linearGradient
                id="paint7_linear"
                x1="43.7096"
                y1="26.4938"
                x2="35.4296"
                y2="33.9688"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFA754" />
              </linearGradient>
              <linearGradient
                id="paint8_linear"
                x1="36.0933"
                y1="31.8196"
                x2="24.7083"
                y2="40.1427"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFA754" />
              </linearGradient>
              <linearGradient
                id="paint9_linear"
                x1="44.5743"
                y1="43.4211"
                x2="33.1893"
                y2="51.7442"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFA754" />
              </linearGradient>
              <radialGradient
                id="paint10_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(59.5133 29.9083) scale(13.6681)"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFA754" />
              </radialGradient>
              <linearGradient
                id="paint11_linear"
                x1="45.2249"
                y1="25.0259"
                x2="38.1524"
                y2="31.5809"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FF8900" />
              </linearGradient>
              <linearGradient
                id="paint12_linear"
                x1="39.8091"
                y1="28.5789"
                x2="30.4941"
                y2="36.9739"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FF8900" />
              </linearGradient>
              <linearGradient
                id="paint13_linear"
                x1="36.661"
                y1="37.6589"
                x2="25.161"
                y2="47.3189"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FF8900" />
              </linearGradient>
              <linearGradient
                id="paint14_linear"
                x1="24.1128"
                y1="44.6766"
                x2="37.4816"
                y2="55.5441"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFBC47" />
              </linearGradient>
              <linearGradient
                id="paint15_linear"
                x1="26.6716"
                y1="31.2062"
                x2="37.1079"
                y2="47.0762"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFBC47" />
              </linearGradient>
              <linearGradient
                id="paint16_linear"
                x1="34.8464"
                y1="32.3397"
                x2="37.7789"
                y2="30.0972"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFA754" />
              </linearGradient>
              <linearGradient
                id="paint17_linear"
                x1="49.3174"
                y1="41.1993"
                x2="45.4073"
                y2="22.5692"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FFBC47" />
              </linearGradient>
              <linearGradient
                id="paint18_linear"
                x1="40.3917"
                y1="59.0796"
                x2="34.5267"
                y2="64.4703"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FF8900" />
              </linearGradient>
              <radialGradient
                id="paint19_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(44.2763 41.2639) rotate(48.1401) scale(39.6178 35.9605)"
              >
                <stop offset="0.6134" stop-color="#FFBC47" stop-opacity="0" />
                <stop offset="1" stop-color="#FF8900" />
              </radialGradient>
            </defs>
          </svg>
          {","}
          <br /> <span>I`m Vlad</span>
        </motion.h1>
        <motion.div
          className="awards"
          variants={awardVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={awardVariants}>Top Rated Designer</motion.h2>
          <motion.p variants={awardVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            officiis.
          </motion.p>
          <motion.div className="awardList" variants={awardVariants}>
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div>
        </motion.div>
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="heroSection right">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="#">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="#">
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="#">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        <Speech />
        <motion.div
          className="certificate"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <img src="/certificate.png" alt="" />
          LMA CERTIFIED
          <br />
          PROFESSIONAL
          <br />
          UI DESIGNER
        </motion.div>

        <div className="contactLinkContainer">
          <div className="wave-btn" />
          <motion.a
            href="#contact"
            className="contactLink"
            animate={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="contactButton"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="circleText">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="46%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </motion.div>
          </motion.a>
        </div>
      </div>
      <div className="bg">
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="heroImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
