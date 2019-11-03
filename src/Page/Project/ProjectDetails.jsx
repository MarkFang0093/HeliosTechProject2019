import React from "react";
import data from "../../data/projectData";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import './ProjectDetails.scss'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProjectDetails = ({ match }) => {
  const classes = useStyles();
  console.log("hello");
  console.log(match.params.id);
  const contents = data[match.params.id];
  return (
    <div>
      
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {contents.title}
        </Typography>
        <Typography variant="h5" component="h3">
          Test text this one
          </Typography>
      </Paper>

      <header class="h1" align = "center" >
          <h3>How Sass can shape the future of&nbsp;CSS</h3>

      </header>
    <h6 class = "h6" indent = "100px">The rise in popularity of CSS extensions, such as Sass, in recent years has not gone unnoticed by the people who work on proposing and standardizing modules for CSS3 (and CSS4).</h6>

    <div>
      <h2 class="h4">The solar panel distribution in US
      
      </h2>

     

      <Typography variant="h7" component="h7">
              Lorem ipsum dolor sit amet, ligula suspendisse nulla pretium, rhoncus tempor fermentum, enim integer ad vestibulum volutpat. Nisl rhoncus turpis est, vel elit, congue wisi enim nunc ultricies sit, magna tincidunt. Maecenas aliquam maecenas ligula nostra, accumsan taciti. Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Faucibus at. Arcu habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat nec pellentesque leo, temporibus scelerisque nec.
     
      </Typography>

      <Typography variant="h7" component="h7">
              Ac dolor ac adipiscing amet bibendum nullam, lacus molestie ut libero nec, diam et, pharetra sodales, feugiat ullamcorper id tempor id vitae. Mauris pretium aliquet, lectus tincidunt. Porttitor mollis imperdiet libero senectus pulvinar. Etiam molestie mauris ligula laoreet, vehicula eleifend. Repellat orci erat et, sem cum, ultricies sollicitudin amet eleifend dolor nullam erat, malesuada est leo ac. Varius natoque turpis elementum est. Duis montes, tellus lobortis lacus amet arcu et. In vitae vel, wisi at, id praesent bibendum libero faucibus porta egestas, quisque praesent ipsum fermentum tempor. Curabitur auctor, erat mollis sed, turpis vivamus a dictumst congue magnis. Aliquam amet ullamcorper dignissim molestie, mollis. Tortor vitae tortor eros wisi facilisis.
      Consectetuer arcu ipsum ornare pellentesque vehicula, in vehicula diam, ornare magna erat felis wisi a risus. Justo fermentum id. Malesuada eleifend, tortor molestie, a a vel et. Mauris at suspendisse, neque aliquam faucibus adipiscing, vivamus in. Wisi mattis leo suscipit nec amet, nisl fermentum tempor ac a, augue in eleifend in venenatis, cras sit id in vestibulum felis in, sed ligula. In sodales suspendisse mauris quam etiam erat, quia tellus convallis eros rhoncus diam orci, porta lectus esse adipiscing posuere et, nisl arcu vitae laoreet. Morbi integer molestie, amet suspendisse morbi, amet maecenas, a maecenas mauris neque proin nisl mollis. Suscipit nec ligula ipsum orci nulla, in posuere ut quis ultrices, lectus primis vehicula velit hasellus lectus, vestibulum orci laoreet inceptos vitae, at consectetuer amet et consectetuer. Congue porta scelerisque praesent at, lacus vestibulum et at dignissim cras urna, ante convallis turpis duis lectus sed aliquet, at et ultricies. Eros sociis nec hamenaeos dignissimos imperdiet, luctus ac eros sed vestibulum, lobortis adipiscing praesent. Nec eros eu ridiculus libero felis.
      Donec arcu risus diam amet sit. Congue tortor risus vestibulum commodo nisl, luctus augue amet quis aenean maecenas sit, donec velit iusto, morbi felis elit et nibh. Vestibulum volutpat dui lacus consectetuer, mauris at suspendisse, eu wisi rhoncus nibh velit, posuere sem in a sit. Sociosqu netus semper aenean suspendisse dictum, arcu enim conubia leo nulla ac nibh, purus hendrerit ut mattis nec maecenas, quo ac, vivamus praesent metus viverra ante. Natoque sed sit hendrerit, dapibus velit molestiae leo a, ut lorem sit et lacus aliquam. Sodales nulla ante auctor excepturi wisi, dolor lacinia dignissim eros condimentum dis pellentesque, sodales lacus nunc, feugiat at. In orci ligula suscipit luctus, sed dolor eleifend aliquam dui, ut diam mauris, sollicitudin sed nisl lacus.
      </Typography>

    </div>


    </div>
    

    


  );
};


///////






export default ProjectDetails;
