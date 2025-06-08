import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import imageapi from "../public/assets/apibuilt.png"
const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Achivement 
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="AWS Academy Graduate - AWS Academy Cloud Foundations "
          des=" This course prepared me to understand core AWS services and cloud concepts, and to pursue further certifications such as the AWS Certified Cloud Practitioner."
          listItem={[]}
          link="https://www.credly.com/badges/50af1a3b-2762-42a7-b264-ca0e6b18f140/public_url"
        />
        <ArchiveCard
          title="AWS Academy Graduate - AWS Academy Machine Learning Foundations"
          des=" Prepared to pursue further studies and certifications in machine learning and artificial intelligence using AWS services.

"
          listItem={[]}
          link="https://www.credly.com/badges/d10e2a35-5b06-4e92-8eef-a13647b9b462/public_url"
        />
        <ArchiveCard
          title="AWS Academy Graduate - AWS Academy Data Engineering"
          des="Equipped with the skills to support data-driven decision-making and pursue further specialization in cloud-based data engineering."
          listItem={[]}
          link="https://www.credly.com/badges/f58be122-28b2-43dd-9231-6d6fc1e54786/public_url"
        />
        <ArchiveCard
          title="AWS Academy Graduate – AWS Academy Cloud Architecting
"
          des=" Prepared to design and implement cloud solutions and pursue certifications like AWS Certified Solutions Architect – Associate.

"
          listItem={[]}
          link="https://www.credly.com/badges/4e4d2e3e-1f71-4237-87a1-af189e4483c8/public_url"
        />
        <ArchiveCard
          title="Crudapp"
          des=" This project demonstrates core Laravel development skills, including routing, controller logic, database migrations, and view rendering."
          listItem={["Laravel", "PHP"]}
          link="https://drive.google.com/file/d/1eymMFiuWuUcCE5A_9-YUzxrWhvUFhPWZ/view?usp=sharing"
          
        />
        <ArchiveCard
          title="Dynamic Ecomerce Website"
          des=" Built a fully functional, dynamic e-commerce website that allows users to browse, search, and purchase products through a seamless online experience."
          listItem={["Reactjs","CSS 5", "netlify deploy"]}
          link="https://luminous-strudel-957d1b.netlify.app/"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Sport Website in Cambodia"
                des=" Developed a dynamic sports website focused on delivering up-to-date news, match schedules, team profiles, and event coverage for Cambodian sports fans."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy","Rest API"]}
                link="https://new-user-sport-hub.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Javascript Quiz test"
                des=" Developed an interactive quiz application using pure JavaScript, HTML, and CSS. The app allows users to test their knowledge through multiple-choice questions and receive real-time feedback."
                listItem={["HTML", "Javascript", "netlify deploy"]}
                link="https://graceful-marshmallow-50a521.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Boostrap Ecomerce Website"
                des="Designed and developed a modern, responsive e-commerce website using Bootstrap for layout and styling. "
                listItem={["HTML", "Bootstrap", "netlify deploy"]}
                link="https://luminous-chebakia-d6c74d.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Facebook API  challenge"
                des="The challenge involved authenticating users, fetching profile information, and displaying posts and insights through a custom interface."
                listItem={["Laravel", "Postman"]}
                link="https://drive.google.com/file/d/1zWvJYE5VnAMNhwzrDYlr-gR4LqcpKNL6/view?usp=sharing"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="PHP Ecomerce Project"
                des="Developed a dynamic and fully functional E-commerce website using core PHP for backend logic and MySQL for database management. "
                listItem={["HTML", "PHP", "MySql"]}
                link="https://drive.google.com/file/d/1W0A-R817GJx7Hj3CZ5T3uwp2fAmgQJJL/view?usp=sharing"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="FUll Stack Project Phone Shop"
                des=" Developed a full-stack web application for an online Phone Shop, allowing users to browse, compare, and purchase smartphones and accessories. "
                listItem={["Reactjs", "Tailwind CSS","Laravel", "vercel deploy"]}
                link="https://drive.google.com/file/d/1QTIzn4qeS3ppNq32Pyd3wtiwqNTKp1rM/view?usp=sharing"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="SQL Knowledge"
                des=" Writing SELECT, INSERT, UPDATE, DELETE statements. Creating and managing tables, indexes, and constraints"
                listItem={["Pgadmin", "SQL server"]}
                link="https://drive.google.com/file/d/1QTIzn4qeS3ppNq32Pyd3wtiwqNTKp1rM/view?usp=sharing"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="WordPress Ecommerce"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Wordpress","Warm Server"]}
                link="https://my-website-rzyw7t.flywp.xyz/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="UX/UI Ecommerce App"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Figma", "Photoshop"]}
                link="https://www.figma.com/proto/fzFWy4jEZNShTJaqRFbyXL/Shoppe---eCommerce-Clothing-Fashion-Store-Multi-Purpose-UI-Mobile-App-Design--Community-?node-id=0-11956&t=RZ8RxAQbmunHBWl8-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A12855"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
