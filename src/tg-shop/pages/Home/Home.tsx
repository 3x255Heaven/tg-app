import ShopLayout from "@shop/hoc/ShopLayout";
import Hero from "@shop/components/Hero";
import CoursePreview from "@shop/components/CoursePreview";
import About from "@shop/components/About";
import Reviews from "@shop/components/reviews/Reviews";
import Preview from "@shop/components/Preview";

const Home = () => {
  return (
    <ShopLayout>
      <div className="w-full flex flex-col justify-center items-center">
        <Hero />
        <CoursePreview />
        <About />
        <Preview />
        <Reviews />
      </div>
    </ShopLayout>
  );
};

export default Home;
