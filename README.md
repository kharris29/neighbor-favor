To run the site, make sure you're in the neighbor-favor directory then type ./run-site.sh
Go to http://localhost:3000/ to see the site (frontend)
Go to http://localhost:3001/ to make sure the backend is working (hello world message)

If you get next not found error:
    cd into frontend
    run npm install next
    if you get an EEXISTS error:
        find the file it says already exists (it should be a next file in .bin)
        manually delete that file from .bin
        run npm install next (hopefully you won't get the EEXISTS error)
    You should be able to run next now