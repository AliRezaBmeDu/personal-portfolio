<motion.div
                whileHover={{ opacity: [0, 1]}}
                transition= {{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className='app__work-hover app__flex'
              >
                <a href={selectedWork.projectLink} target='_blank' rel='noreferrer'
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition= {{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={selectedWork.codeLink} target='_blank' rel='noreferrer'
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition= {{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>