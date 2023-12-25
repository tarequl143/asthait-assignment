"use client";
import { Button } from "@/components/button/Button";
import { Counter } from "@/components/counter/Counter";
import { Heading } from "@/components/heading/Heading";
import { IconCard } from "@/components/icon-card/IconCard";
import { MenuItem } from "@/components/menuItem/MenuItem";
import { Paragraph } from "@/components/paragraph/Paragraph";
import Image from "next/image";
import {
  DiscordLogo,
  EnvelopeSimple,
  FacebookLogo,
  LinkedinLogo,
  Phone,
  Star,
  TwitterLogo,
} from "phosphor-react";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* Hero Section */}
        <div className="flex w-full pt-[170px] pb-[55px] bg-primary-background bg-no-repeat bg-cover bg-hero-grid">
          <div className="container flex items-center justify-between flex-col lg:flex-row px-4">
            <div className="flex flex-wrap flex-col w-full lg:w-[630px]">
              <div className="flex flex-wrap">
                <Heading
                  title="Empowering Trades with Our Capital 🔥"
                  level={1}
                  color="light"
                />
                <div className="flex w-full h-5"></div>
                <Paragraph
                  color="white"
                  content="Global Reach, Local Support: Funding Your Trading Dreams Up to
                $300,000"
                />
                <div className="flex w-full h-9"></div>
                <Button label="Get up to $300,000 funds 🙌" size="large" />
              </div>
              <div className="flex items-start md:items-center mt-[50px] xl:mt-[110px] flex-col md:flex-row">
                <Counter count="195+" label="Countries Covered" />
                <Image
                  src="/assets/counter-seperator.png"
                  width="15"
                  height="38"
                  alt="Seperator"
                  className="mx-6 hidden md:inline-block"
                />
                <Counter count="$51M+" label="Total payout" />
                <Image
                  src="/assets/counter-seperator.png"
                  width="15"
                  height="38"
                  alt="Seperator"
                  className="mx-6 hidden md:inline-block"
                />
                <Counter count="$51k+" label="Funded Traders" />
              </div>
            </div>
            <div className="hidden md:flex flex-1 lg:justify-end mt-12 w-full pl-16 lg:pl-0 lg:mt-0 lg:w-auto">
              <div className="inlin-flex pr-[60px] relative">
                <div className="absolute shadow-sm -right-6 top-12 py-2 pl-2 pr-[10px] bg-white rounded-[50px] inline-flex items-center">
                  <Image
                    src="/assets/hand.png"
                    width="30"
                    height="30"
                    alt="Hand"
                  />
                  <span className="text-[#292D34] text-md font-semibold ml-[7px] inline-flex leading-[30px]">
                    Brand Promoter
                  </span>
                </div>
                <img
                  src="/assets/play-button.png"
                  alt="Play Button"
                  className="absolute -translate-x-1/2 top-5"
                />
                <img
                  src="/assets/hand-drawn-accents.svg"
                  alt="Hand Drawn Accents"
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                />
                <img src="/assets/hero-right-img.png" alt="Hero Right Image" />
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Funded Next Different Section */}
        <div className="bg-[#F0F2FF] pt-[108px] pb-[148px] relative w-full">
          <Image
            src="/assets/union1.png"
            width={68}
            height={65}
            alt="Union"
            className="absolute bottom-[52px] left-[62px]"
          />
          <div className="container flex gap-[74px] xl:items-center px-4 flex-col xl:flex-row xl:p-0">
            <div className="w-full lg:w-[520px] flex flex-col">
              <Heading
                title="What Makes FundedNext Different?"
                level={2}
                color="dark"
              />
              <div className="flex w-full h-5"></div>
              <Paragraph
                content="FundedNext offers no time limits in its funding challenges."
                size="lg"
              />
              <div className="flex w-full h-0 lg:h-6"></div>
              <div className="inline-flex items-center">
                <Image
                  src="/assets/traders.png"
                  width={200}
                  height={70}
                  alt="Traders"
                />
                <div className="inline-flex flex-col ml-3">
                  <Heading title="Our Happy Traders" level={6} color="dark" />
                  <div className="flex items-center">
                    <Star size={18} weight="fill" />
                    <Paragraph content="4.9" size="sm" color="dark" />
                    <Paragraph
                      content="(1.5k Reviews)"
                      size="sm"
                      color="gray"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-1 flex-wrap gap-5 flex-col md:flex-row max-w-[700px]">
              <div className="w-full md:w-auto">
                <IconCard
                  icon="/assets/share.svg"
                  title="15% Profit Sharing from Challenge Phase"
                  text="FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make"
                />
              </div>
              <div className="w-full md:w-auto md:translate-y-[40px]">
                <IconCard
                  icon="/assets/share.svg"
                  title="Balance Drawdown Performance Overview"
                  text="Daily drawdown uses balance, not equity, for utmost prop firm reliability."
                />
              </div>
              <div className="w-full md:w-auto">
                <IconCard
                  icon="/assets/share.svg"
                  title="Competitive Low Commission Rates"
                  text="FundedNext offers raw spread with Swap Free: World's best prop trading conditions."
                />
              </div>
              <div className="w-full md:w-auto md:translate-y-[40px]">
                <IconCard
                  icon="/assets/share.svg"
                  title="No Time Limit on Challenge Phase"
                  text="Daily drawdown uses balance, not equity, for utmost prop firm reliability."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Introducing Funded Next Challenge Section */}
        <div className="bg-white pt-[120px] pb-[204px] relative w-full">
          <Image
            src="/assets/union2.svg"
            width={68}
            height={65}
            alt="Union"
            className="absolute bottom-[21px] left-[12px]"
          />
          <Image
            src="/assets/union3.svg"
            width={68}
            height={65}
            alt="Union"
            className="absolute top-0 right-[5px]"
          />
          <div className="container flex gap-[60px] items-center flex-col lg:flex-row px-4">
            <div className="flex flex-1 flex-wrap">
              <Heading
                title="Introducing FundedNext Stellar Challenge 🙌"
                level={2}
                color="dark"
              />
              <div className="flex w-full h-7"></div>
              <div className="flex items-baseline">
                <Image
                  src="/assets/star.svg"
                  width={16}
                  height={16}
                  alt="*"
                  className="mr-2"
                />
                <Paragraph content="No Time Limit" size="lg" />
              </div>
              <div className="flex w-full h-3"></div>
              <div className="flex items-baseline">
                <Image
                  src="/assets/star.svg"
                  width={16}
                  height={16}
                  alt="*"
                  className="mr-2"
                />
                <Paragraph content="Balance Based Drawdown" size="lg" />
              </div>
              <div className="flex w-full h-3"></div>
              <div className="flex items-baseline">
                <Image
                  src="/assets/star.svg"
                  width={16}
                  height={16}
                  alt="*"
                  className="mr-2"
                />
                <Paragraph
                  content="15% Profit Share from Challenge Phase"
                  size="lg"
                />
              </div>
              <div className="flex w-full h-10"></div>
              <Button label="Learn More" />
            </div>
            <div className="flex max-w-[620px] w-full flex-wrap gap-5">
              <Image
                src="/assets/funded_next.png"
                width={620}
                height={490}
                alt="*"
                className="mr-0 lg:mr-2"
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative w-full bg-primary-background">
          <div className="container flex flex-col px-4">
            <div className="py-16 border-b border-b-[#475467] flex  items-center justify-between flex-col lg:flex-row">
              <div className="max-w-[728px] text-center lg:text-left mb-8 lg:mb-0">
                <Heading
                  level={2}
                  title="Join the Global Community for the Traders ✌️"
                  color="light"
                />
              </div>
              <Button
                label="Join our Discord"
                icon={<DiscordLogo size={24} />}
              />
            </div>
            <div className="py-16 flex flex-wrap">
              <div className="w-full lg:max-w-[320px] md:mr-16 mb-12 lg:mb-0 text-center md:text-left">
                <Paragraph
                  content="Empowering global traders with unrivalled financial support. Navigate markets confidently with our innovative funding models and expert guidance."
                  color="lightGray"
                />
                <div className="inline-flex items-center gap-6 mt-8">
                  <a href="#">
                    <TwitterLogo size={24} weight="fill" color="#686885" />
                  </a>
                  <a href="#">
                    <LinkedinLogo size={24} weight="fill" color="#686885" />
                  </a>
                  <a href="#">
                    <FacebookLogo size={24} weight="fill" color="#686885" />
                  </a>
                  <a href="#">
                    <DiscordLogo size={24} weight="fill" color="#686885" />
                  </a>
                </div>
              </div>
              <div className="flex flex-1 gap-8 flex-col md:flex-row">
                <div className="flex w-full flex-col items-center md:items-start">
                  <Heading title="Important Link" level={6} color="light" />
                  <ul className="flex flex-col gap-3 mt-4 items-center md:items-start">
                    <li>
                      <MenuItem label="Overview" url="#" />
                    </li>
                    <li>
                      <MenuItem label="Affiliate Partner" url="#" />
                    </li>
                    <li>
                      <MenuItem label="Payment Partner" url="#" />
                    </li>
                    <li>
                      <MenuItem label="Success Stories" url="#" />
                    </li>
                  </ul>
                </div>
                <div className="flex w-full flex-col items-center md:items-start">
                  <Heading title="Models" level={6} color="light" />
                  <ul className="flex flex-col gap-3 mt-4 items-center md:items-start">
                    <li>
                      <MenuItem label="Express" url="#" />
                    </li>
                    <li>
                      <MenuItem label="Evaluation " url="#" />
                    </li>
                    <li>
                      <MenuItem label="Stellar Challenge" url="#" isNew />
                    </li>
                  </ul>
                </div>
                <div className="flex w-full flex-col items-center md:items-start">
                  <Heading
                    title="Contact Information"
                    level={6}
                    color="light"
                  />
                  <ul className="flex flex-col gap-3 mt-4 items-center md:items-start">
                    <li>
                      <MenuItem
                        label="info@wearenext.com"
                        url="#"
                        icon={<EnvelopeSimple size={20} />}
                      />
                    </li>
                    <li>
                      <MenuItem
                        label="+986 8989 899"
                        url="#"
                        icon={<Phone size={20} />}
                      />
                    </li>
                    <li>
                      <MenuItem
                        label="+986 8989 899"
                        url="#"
                        icon={<Phone size={20} />}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-8 pb-12 border-t border-t-[#475467] flex items-center justify-between flex-col md:flex-row">
              <Paragraph
                content="© 2023 alll rights reserved."
                color="lightGray"
              />
              <div className="flex flex-1 items-center justify-end gap-5 mt-4 md:mt-0">
                <MenuItem label="Cookie Policy" url="#" />
                <MenuItem label="Privacy Policy" url="#" />
                <MenuItem label="Terms & Conditions" url="#" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
