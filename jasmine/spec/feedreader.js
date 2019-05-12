/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        // Checks allFeeds variable has been defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Checks all feeds have a URL defined
         it('url defined', function() {
             for(let feed of allFeeds) {
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
             }
         });

          // Checks all feeds have a name defined
         it('name defined', function() {
             for(let feed of allFeeds) {
               expect(feed.name).toBeDefined();
               expect(feed.length).not.toBe(0);
             }
         });
    });


      // "The menu" test suite
  describe('The menu', function() {

          // Makes sure body contains class 'menu-hidden', i.e. that menu item is hidden by default
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // uses ".click()"" to check menu toggles on/off when clicked
        it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* "Initial Entries" test suite to load initial entry */
    describe('Initial Entries', function() {
             const feed = document.querySelector('.feed');

          // Loads initial entry and tells us when  its done
            beforeEach(function(done) {
              loadFeed(0, done);
            });

            // Tells us there is at least a single entry element within the feed container
              it('completes work', function() {
                 expect(feed.children.length > 0).toBe(true);
              });
            });

    // /* Test suite to check new feed is different to old feed
    describe('New Feed Selection', function() {

           // Declare two variables, which will be filled by seperate feeds
            var originalContent;
            var updatedContent;

             // Loads two feeds and assigns them to the two variables; calls done() when process completed

            beforeEach(function(done) {
                loadFeed(0, function() {
                    originalContent = $('.feed').text();

                    loadFeed(1, function () {
                        updatedContent = $('.feed').text();
                        done();
                    });
                });
            });

            // Checks content of new feed is different from the old feed
              it('loads a new feed', function () {
                  expect(updatedContent).not.toBe(originalContent);
              });
        });
}());
