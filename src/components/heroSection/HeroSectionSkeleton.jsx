import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./heroSection.css";

function HeroSectionSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="heroSkeleton">
        <div className="heroSectionSkeleton leftSkeleton">
          <div className="heroTitleSkeleton">
            <Skeleton height={170} width={340} />
          </div>
          <div className="awardsSkeleton">
            <Skeleton height={20} />
            <div style={{ marginTop: "16px" }}>
              <Skeleton count={2} height={10} />
            </div>
            <div className="awardListSkeleton" style={{ marginTop: "16px" }}>
              {[...Array(3)].map((_, index) => {
                return (
                  <div key={index}>
                    <Skeleton circle width={38} height={38} />
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <Skeleton circle width={30} height={50} />
          </div>
        </div>
        <div className="heroSectionSkeleton rightSkeleton">
          <div className="followSkeletonContainer">
            <Skeleton
              width={55}
              height={150}
              borderRadius={"0px 0px 10px 0px"}
            />
          </div>
          <div className="bubbleSkeletonContainer">
            <div style={{ width: "100%", height: "100px" }}>
              <Skeleton
                borderRadius={"20px 20px 0px 20px"}
                style={{ width: "100%", height: "100px" }}
              />
            </div>
            <Skeleton circle width={50} height={50} />
          </div>
          <div className="certificateSkeletonContainer">
            <Skeleton circle width={75} height={75} />
            <Skeleton count={3} height={10} width={90} />
          </div>
          <div style={{ marginBottom: "50px" }}>
            <Skeleton circle width={130} height={130} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default HeroSectionSkeleton;
