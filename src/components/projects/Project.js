import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { chatProject, frequencyProject, libraryProject, manjushreeProject, note, todo, book } from '../../assets';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full pb-10 border-b-[1px] border-b-gray-600 text-gray-200"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectCard
          title="York Chat"
          des="The York Chat Messaging System is a real-time communication platform designed to facilitate seamless and interactive conversations. Built using Firebase for OAuth2 authentication, it ensures secure and streamlined user access. The chat functionality is powered by ChatEngine.io, providing a robust framework for managing real-time messaging, user presence, and chat history. This system supports both individual and group chats, with features such as message notifications, typing indicators, and user status updates, creating an engaging and user-friendly chat experience."
          src={chatProject}
          gitRepo="https://github.com/shasigdel/york-project-chat-app"
          website="https://yorkchat.netlify.app"
        />
        <ProjectCard
          title="Library Informative System"
          des="The Library Informative System is a web application developed using ReactJS that serves as a comprehensive platform for managing and accessing library resources. This system is designed to provide users with an intuitive and responsive interface to explore, search, and manage books and other library materials."
          src={libraryProject}
          gitRepo="https://github.com/shasigdel/libraryWebsite-demo"
          website="https://yorklibrary.netlify.app"
        />
        <ProjectCard
          title="ManjuShree Tailoring"
          des="The Manjushree Tailoring App is an informative website designed to showcase and promote a local tailoring business, leveraging the power of ReactJS for a modern, responsive, and interactive user experience. This application serves as a digital presence for Manjushree Tailoring, allowing customers to explore services, view portfolios, and get in touch with the business seamlessly."
          src={manjushreeProject}
          website="https://manjushree.netlify.app"
          gitRepo="https://github.com/shasigdel/majushree-tailor"
        />
        <ProjectCard
          title="Frequency Analysis"
          des=" Frequency Analysis Using Python is a technique used to analyze the frequency of characters, words, or patterns in a given text. This method is often employed in the fields of cryptography, linguistics, and text analysis to understand the distribution of elements within a dataset."
          src={frequencyProject}
          gitRepo="https://github.com/shasigdel/frequency-analysis-python"
        />
        <ProjectCard
          title="Note Taking App - Full Stack"
          des="The Note Taking App is a full-stack application developed using Django for the backend and ReactJS for the frontend. This app allows users to create, edit, delete, and organize their notes efficiently, providing a seamless and intuitive interface for managing personal or work-related information."
          src={note}
          gitRepo="https://github.com/shasigdel/django-react-fullstack"
      />
      <ProjectCard
          title="To-do List"
          des="The To-Do List App is a simple, yet effective task management tool built using Vanilla JavaScript. This app allows users to add, manage, and remove tasks, helping them stay organized and keep track of their daily activities."
          src={todo}
          gitRepo="https://github.com/shasigdel/todo-list-vanilla-js"
      />
      <ProjectCard
          title="Book Store"
          des="A full-stack MERN (MongoDB, Express, React, Node.js) bookstore application built using Vite for fast frontend development."
          src={book}
          gitRepo="https://github.com/shasigdel/mernstack-bookstore"
        />
      </div>
    </section>
  );
}

export default Projects
