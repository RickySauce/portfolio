<div style={{height: '300px', position: 'relative'}}>
  <Layout fixedHeader>
    <Header title={<span>
      <MdMenu id="nav-menu" className='nav-icon'/>
         <Menu target="nav-menu">
             <MenuItem>About Me</MenuItem>
             <MenuItem>Projects</MenuItem>
             <MenuItem>Contact Me</MenuItem>
         </Menu>
       <strong id="nav-title">Eric DeSimone</strong></span>}>
      <Navigation className='nav-icons'>
      <Tooltip label="Linkedin" position="bottom">
        <a href='https://www.linkedin.com/in/ericdesimone91/' onClick={handleIconClick}><IoLogoLinkedin className='nav-icon'/></a>
        </Tooltip>
        <Tooltip label="Github" position="bottom">
        <a href='https://github.com/RickySauce' onClick={handleIconClick}> <FaGithub className='nav-icon'/></a>
        </Tooltip>
        <Tooltip label="Résumé" position="bottom">
        <a href='https://drive.google.com/file/d/1X-ARgNxB664NeAdg6givUSp9Ga0PgLYi/view?usp=sharing' onClick={handleIconClick}> <TiDocument className='nav-icon'/></a>
        </Tooltip>
      </Navigation>
    </Header>
    </Layout>
</div>
