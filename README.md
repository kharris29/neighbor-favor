To run the site, make sure you're in the neighbor-favor directory then type ./run-site.sh
Go to http://localhost:3000/ to see the site (frontend)
Go to http://localhost:3001/ to make sure the backend is working (hello world message)

HOW TO RUN (NEW VERSION):
Make sure in neighbor-favor directory
Type: ./run-site.sh

If there is an error about nodemon or next not being found, do this:
Type: ./dep.sh
Now the run-site script should work. If not, see next step then try run-site again

If you get an error saying port is already in use:
Type: lsof -i tcp:3001 (in any terminal)
Type: kill -9 [ process id ] (where process id is PID, second to left column. if nothing shows up you're good. no brackets lol)

--------------

If you get next not found error:
    cd into frontend
    run npm install next
    if you get an EEXISTS error:
        find the file it says already exists (it should be a next file in .bin)
        manually delete that file from .bin
        run npm install next (hopefully you won't get the EEXISTS error)
    You should be able to run next now