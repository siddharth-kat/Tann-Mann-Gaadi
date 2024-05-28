import * as React from "react";
// import './App.css';
function AboutUs() {
  return (
    <div className="flex flex-col bg-white">
      {/* <div className="flex justify-center items-center px-16 py-3 w-full bg-neutral-100 bg-opacity-70 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-w-[1288px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14357f6d266c34f40df6688e79bd2a50ddccb07ae21f152940942a981b956d96?apiKey=df85b483d97442268acfc4e7f3531450&"
            className="shrink-0 self-stretch max-w-full aspect-[1.49] w-[116px]"
          />
          <div className="flex gap-5 justify-between self-stretch my-auto text-lg font-bold leading-5 text-neutral-700 max-md:flex-wrap">
            <div className="text-orange-400">About Us</div>
            <div>Courses</div>
            <div>Community</div>
            <div>Contact Us</div>
          </div>
          <div className="flex gap-5 justify-between self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4936f5e312c2b6feac2ee162a988ed2a420f031380d6860b743d831f674b10fd?apiKey=df85b483d97442268acfc4e7f3531450&"
              className="shrink-0 max-w-full aspect-[3.85] w-[146px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5423e7eca2c6b9c2d7dcebf033b9d983b0cb6329b864bd59a3bbded668d3dac6?apiKey=df85b483d97442268acfc4e7f3531450&"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="justify-center self-stretch px-5 py-2.5 my-auto text-lg font-bold text-white uppercase bg-orange-400 rounded-xl">
            Log in
          </div>
        </div>
      </div> */}
      <div className="flex flex-col px-14 mt-8 w-full text-3xl font-bold leading-8 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a51df9a5905464d053ad5a9b2be0bb67502033d302bb9dec0b86ec34cf3ac984?apiKey=df85b483d97442268acfc4e7f3531450&"
          className="w-full aspect-[2] max-md:max-w-full"
        />
        <div className="self-start mt-11 ml-3 text-justify text-orange-400 max-md:mt-10 max-md:ml-2.5">
          We are aware, are you?
        </div>
        <div className="mt-9 text-2xl leading-10 text-justify text-neutral-700 max-md:max-w-full">
          Welcome to the &quot;Mind Blowing Morning&quot; program, a platform
          dedicated to supporting the incredible work of the &quot;Tann Mann
          Gaadi&quot; foundation.
          <br />
          &quot;Mind Blowing Morning&quot; supports &quot;The Tann Mann
          Gaadi&quot; foundation, ensuring reliable donations and channelling
          them directly to the organisation. Our program offers the most
          trustworthy giving options, having undergone an exhaustive due
          diligence process covering legal, financial, and implementation
          aspects.
          <br />
          By partnering with us, you can be confident that your donations will
          be utilised efficiently to drive meaningful change through the
          initiatives of the &quot;Tann Mann Gaadi&quot; foundation. Together,
          let's create a brighter future for those in need.
          <br />
        </div>
        <div className="self-start mt-16 ml-3 text-justify text-orange-400 max-md:mt-10 max-md:ml-2.5">
          The 21/90 Rule
        </div>
        <div className="mt-12 text-2xl text-justify leading-[59px] text-neutral-700 max-md:mt-10 max-md:max-w-full">
          Our program, following the rule of 21/90, empowers individuals to
          develop lasting habits. Within 21 days, you can build a habit, while
          it requires 90 days for it to become an ingrained, permanent lifestyle
          change. 
          <br />
          Through our structured approach, we provide the tools and support
          needed to successfully establish the habit within the initial three
          weeks. However, the ultimate responsibility lies with you to sustain
          and integrate it into your daily routine. As you consistently practise
          the habit of waking up early, you will witness its positive impact on
          your physical and mental well-being, fostering remarkable changes in
          your behaviour and overall quality of life.
          <br />
        </div>
        <div className="justify-center items-center self-center px-2.5 py-5 mt-14 max-w-full text-xl text-white capitalize whitespace-nowrap bg-orange-400 rounded-xl w-[232px] max-md:px-5 max-md:mt-10">
          Register
        </div>
      </div>
      <div className="flex flex-col items-center self-start px-16 pb-6 mt-20 ml-4 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af97731c29b29b54ad3b577b46228aa72abc4b7549c09cd5d632c5ee556bfc06?apiKey=df85b483d97442268acfc4e7f3531450&"
          className="aspect-[11.11] max-w-[1040px] w-[1040px] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col px-11 py-8 mt-20 w-full bg-stone-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-bold tracking-wide leading-8 text-zinc-600 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&"
                  className="aspect-[1.45] w-[90px]"
                />
                <div className="mt-5">
                  Clear your thoughts, Focus your mind, and Reduce stress!
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="max-md:mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-lg leading-6 text-zinc-600 max-md:mt-9">
                      <div className="font-bold leading-[111%]">
                        Quick Links
                      </div>
                      <div className="mt-2">Home</div>
                      <div className="mt-2">Community</div>
                      <div className="mt-2">Courses</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-lg leading-6 text-zinc-600 max-md:mt-9">
                      <div className="font-bold leading-[111%] max-md:mr-2">
                        Company
                      </div>
                      <div className="mt-2.5">About us</div>
                      <div className="mt-2.5">Contact us</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[47%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-lg leading-6 text-zinc-600 max-md:mt-9">
                      <div className="font-bold leading-[111%]">
                        Further information
                      </div>
                      <div className="mt-2.5 max-md:mr-2">
                        Terms & Conditions
                      </div>
                      <div className="mt-2.5">Privacy policy</div>
                      <div className="mt-2">Cookies policy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-8">
                <div className="text-lg font-bold leading-5 text-zinc-600">
                  Need help?
                </div>
                <div className="flex gap-5 pl-7 mt-5 max-w-full rounded-lg shadow-sm bg-zinc-50 w-[414px] max-md:pl-5">
                  <div className="flex-auto my-auto text-sm text-zinc-600">
                    Your email address
                  </div>
                  <div className="z-10 justify-center px-5 py-2.5 text-2xl font-bold text-white capitalize whitespace-nowrap bg-orange-400 rounded-lg">
                    submit
                  </div>
                </div>
                <div className="flex gap-5 justify-between self-start mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a772ce5172e02a3870bf0bc4efc1923285cd32c57cbef73dddf8800b6cb147?apiKey=df85b483d97442268acfc4e7f3531450&"
                    className="shrink-0 aspect-square w-[26px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dee3f2f167632b11999e0fa8865cff3604f11dcf2e19c7c12422754c4432e84?apiKey=df85b483d97442268acfc4e7f3531450&"
                    className="shrink-0 aspect-square w-[26px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6d83c752c1d1e710f03f84a16682c5079e6f82bc8fc0e0f36771ee0b4f6e40d?apiKey=df85b483d97442268acfc4e7f3531450&"
                    className="shrink-0 aspect-[1.04] w-[27px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 self-center py-px mt-12 text-sm text-zinc-600 max-md:mt-10">
          <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfea16f1a9ebc2bf38689a5c9aa1e0de348d7f112caf39785b0f4e21566265cb?apiKey=df85b483d97442268acfc4e7f3531450&"
              className="shrink-0 my-auto aspect-square w-[11px]"
            />
            <div>Copyright 2023</div>
          </div>
          <div className="shrink-0 my-auto h-2 rounded-full bg-zinc-600 w-[9px]" />
          <div>MindBlowing Mornings</div>
          <div className="shrink-0 my-auto h-2 rounded-full bg-zinc-600 w-[9px]" />
          <div>All rights reserved</div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
