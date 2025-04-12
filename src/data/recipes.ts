
import { Recipe } from "@/components/RecipeCard";

// Helper function to create URL-friendly slugs from titles
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Trim any leading/trailing spaces or hyphens
};

export const recipes: Recipe[] = [
  {
    id: "classic-vanilla-cupcakes",
    title: "Classic Vanilla Cupcakes",
    slug: "classic-vanilla-cupcakes",
    description: "Light and fluffy vanilla cupcakes topped with creamy buttercream frosting and colorful sprinkles.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "45 mins",
    difficulty: "Easy",
    content: "These classic vanilla cupcakes are a staple in any baker's repertoire. The secret to their light and fluffy texture is to not overmix the batter and to use room temperature ingredients. The buttercream frosting is silky smooth with just the right amount of sweetness.",
    galleryImages: [
      "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "1 1/2 teaspoons baking powder",
      "1/4 teaspoon salt",
      "1/2 cup unsalted butter, room temperature",
      "1 cup granulated sugar",
      "2 large eggs, room temperature",
      "1 1/2 teaspoons vanilla extract",
      "1/2 cup whole milk"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Line a 12-cup muffin tin with paper liners.",
      "In a medium bowl, whisk together flour, baking powder, and salt.",
      "In a large bowl, beat butter and sugar until light and fluffy, about 3 minutes.",
      "Add eggs one at a time, beating well after each addition. Stir in vanilla extract.",
      "Gradually add dry ingredients alternating with milk, beginning and ending with dry ingredients.",
      "Divide batter evenly among muffin cups, filling each about 2/3 full.",
      "Bake for 18-20 minutes, or until a toothpick inserted in center comes out clean.",
      "Cool completely before frosting with your favorite buttercream and decorating with sprinkles."
    ]
  },
  {
    id: 2,
    title: "Chocolate Chunk Cookies",
    slug: "chocolate-chunk-cookies",
    description: "Chewy on the inside, crispy on the edges – these chocolate chunk cookies are simply irresistible.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "30 mins",
    difficulty: "Easy",
    content: "The perfect chocolate chunk cookie should be crispy on the outside, chewy in the middle, and loaded with melty chocolate chunks. This recipe delivers exactly that! The secret is using brown sugar for chewiness, chilling the dough before baking, and using high-quality chocolate chunks instead of chips.",
    galleryImages: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1673551490160-3f2e712b9373?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670895802345-f46a6250749c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "2 cups chocolate chunks"
    ],
    instructions: [
      "In a medium bowl, whisk together flour, baking soda, and salt.",
      "In a large bowl, beat butter and both sugars until light and fluffy, about 3-4 minutes.",
      "Add eggs one at a time, beating well after each addition. Stir in vanilla extract.",
      "Gradually add dry ingredients until just combined. Fold in chocolate chunks.",
      "Cover and refrigerate dough for at least 1 hour (or overnight for best results).",
      "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
      "Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart.",
      "Bake for 9-11 minutes until edges are golden but centers are still soft.",
      "Cool on baking sheets for 5 minutes, then transfer to wire racks to cool completely."
    ]
  },
  {
    id: 3,
    title: "Lemon Blueberry Scones",
    slug: "lemon-blueberry-scones",
    description: "Tender scones bursting with fresh blueberries and zesty lemon flavor, perfect for breakfast or brunch.",
    image: "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "35 mins",
    difficulty: "Medium",
    content: "These lemon blueberry scones are bright, buttery, and bursting with flavor. The secret to their perfect texture is keeping the butter cold and not overworking the dough. Fresh blueberries work best, but frozen will do in a pinch - just don't thaw them before using!",
    galleryImages: [
      "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1/3 cup granulated sugar",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "Zest of 2 lemons",
      "1/2 cup cold unsalted butter, cubed",
      "1/2 cup heavy cream",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "1 cup fresh blueberries"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
      "In a large bowl, whisk together flour, sugar, baking powder, salt, and lemon zest.",
      "Cut in cold butter until mixture resembles coarse crumbs.",
      "In a small bowl, whisk together heavy cream, egg, and vanilla extract.",
      "Add wet ingredients to dry ingredients and mix just until dough comes together.",
      "Gently fold in blueberries.",
      "Transfer dough to a floured surface and shape into an 8-inch disc. Cut into 8 wedges.",
      "Place scones on prepared baking sheet, leaving about 2 inches between each.",
      "Brush tops with a little heavy cream and sprinkle with sugar.",
      "Bake for 20-25 minutes, until golden brown."
    ]
  },
  {
    id: 4,
    title: "Cinnamon Swirl Bread",
    slug: "cinnamon-swirl-bread",
    description: "Soft and fluffy homemade bread with a sweet cinnamon sugar swirl throughout.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "3 hours",
    difficulty: "Hard",
    content: "This cinnamon swirl bread fills your home with the most amazing aroma as it bakes. It's perfect toasted with a bit of butter for breakfast, or use it to make the most incredible French toast you've ever tasted. The bread itself is soft and tender, while the cinnamon sugar swirl adds sweetness and spice.",
    galleryImages: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1649308401368-a68b77116605?q=80&w=1000"
    ],
    ingredients: [
      "3 1/2 cups all-purpose flour",
      "1/4 cup granulated sugar, plus more for sprinkling",
      "2 1/4 teaspoons active dry yeast",
      "1 teaspoon salt",
      "1 cup whole milk, warmed",
      "1/4 cup unsalted butter, melted",
      "2 large eggs",
      "1/3 cup granulated sugar",
      "2 tablespoons ground cinnamon",
      "1/4 cup unsalted butter, softened"
    ],
    instructions: [
      "In a large mixing bowl, combine 2 cups of flour, sugar, yeast, and salt.",
      "Add warm milk, melted butter, and eggs. Beat until smooth.",
      "Gradually add remaining flour to form a soft dough.",
      "Knead on floured surface for 6-8 minutes until smooth and elastic.",
      "Place in greased bowl, cover, and let rise in warm place for 1 hour or until doubled.",
      "Punch down dough and roll into a rectangle (approximately 9x18 inches).",
      "Mix cinnamon and sugar. Spread softened butter over dough and sprinkle with cinnamon-sugar mixture.",
      "Starting from short end, roll up tightly. Pinch seams to seal and place in greased 9x5 inch loaf pan.",
      "Cover and let rise until puffy, about 2 hours.",
      "Brush again with egg wash, sprinkle with sliced almonds, and bake at 350°F (175°C) for 40-45 minutes until golden brown.",
      "Cool in pan for 10 minutes, then remove to wire rack to cool completely before slicing."
    ]
  },
  {
    id: 5,
    title: "Strawberry Shortcake",
    slug: "strawberry-shortcake",
    description: "Buttery biscuits layered with fresh strawberries and homemade whipped cream.",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "40 mins",
    difficulty: "Medium",
    content: "This classic strawberry shortcake features tender, flaky biscuits, juicy macerated strawberries, and clouds of freshly whipped cream. It's the perfect summer dessert and a wonderful way to showcase fresh, in-season berries. The key to perfect shortcakes is to handle the dough as little as possible to keep them light and tender.",
    galleryImages: [
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1/4 cup granulated sugar, plus more for sprinkling",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "6 tablespoons cold unsalted butter, cubed",
      "2/3 cup cold heavy cream, plus more for brushing",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "4 cups fresh strawberries, hulled and sliced",
      "1/4 cup granulated sugar",
      "2 cups heavy cream",
      "1/4 cup powdered sugar",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper.",
      "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
      "Cut in cold butter until mixture resembles coarse crumbs.",
      "Whisk together cream, egg, and vanilla, then add to dry ingredients, stirring just until moistened.",
      "Turn onto floured surface and knead gently 3-4 times. Pat into 3/4-inch thick rectangle.",
      "Cut into 8 biscuits with a 2 1/2-inch biscuit cutter, rerolling scraps as needed.",
      "Place biscuits on prepared baking sheet. Brush tops with cream and sprinkle with sugar.",
      "Bake for 12-15 minutes until golden brown. Cool on wire rack.",
      "In a bowl, combine sliced strawberries and sugar. Let stand for 30 minutes.",
      "In another bowl, beat heavy cream, powdered sugar, and vanilla until stiff peaks form.",
      "To serve, split biscuits in half. Top bottom halves with strawberries and whipped cream, then add top halves."
    ]
  },
  {
    id: 6,
    title: "Almond Croissants",
    slug: "almond-croissants",
    description: "Buttery, flaky croissants filled with rich almond cream and topped with sliced almonds.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "2 days",
    difficulty: "Expert",
    content: "These almond croissants are a labor of love but absolutely worth the effort. The combination of buttery, flaky layers with rich almond cream is utterly divine. While traditionally made with day-old croissants in French bakeries, this recipe allows you to create the entire experience from scratch. Patience is key to achieving those perfect layers!",
    galleryImages: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1649542181703-33cc4f373b28?q=80&w=1000",
      "https://plus.unsplash.com/premium_photo-1670333242822-40e564cc3100?q=80&w=1000"
    ],
    ingredients: [
      "4 cups all-purpose flour",
      "1/3 cup granulated sugar",
      "2 teaspoons salt",
      "1 tablespoon active dry yeast",
      "1 1/4 cups cold milk",
      "2 cups unsalted European-style butter for laminating",
      "1 cup almond flour",
      "1/2 cup granulated sugar",
      "1/4 teaspoon salt",
      "6 tablespoons unsalted butter, softened",
      "2 large eggs",
      "1 teaspoon almond extract",
      "1 teaspoon vanilla extract",
      "Sliced almonds and powdered sugar for topping"
    ],
    instructions: [
      "Day 1: Make the dough by combining flour, sugar, salt, yeast, and milk. Knead until smooth.",
      "Shape into a rectangle, wrap in plastic, and refrigerate overnight.",
      "Day 2: Prepare butter block by pounding cold butter into a 7x10 inch rectangle between parchment paper.",
      "Roll dough into a rectangle twice the size of the butter block. Place butter in center and fold dough over it.",
      "Roll out and perform a series of three-folds with 30-minute refrigeration periods between each fold.",
      "After final fold, refrigerate overnight.",
      "Day 3: Prepare almond cream by mixing almond flour, sugar, salt, butter, eggs, and extracts until smooth.",
      "Roll dough to 1/8 inch thickness and cut into triangles. Cut small notch in the wide end of each triangle.",
      "Spread small amount of almond cream on each triangle before rolling from wide end to tip.",
      "Shape into crescents and place on parchment-lined baking sheets. Brush with egg wash.",
      "Let rise until puffy, about 2 hours.",
      "Brush again with egg wash, sprinkle with sliced almonds, and bake at 375°F (190°C) for 15-18 minutes until golden.",
      "Cool slightly, then dust with powdered sugar before serving."
    ]
  },
  {
    id: 7,
    title: "Chocolate Lava Cakes",
    slug: "chocolate-lava-cakes",
    description: "Decadent individual chocolate cakes with a molten chocolate center.",
    image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "30 mins",
    difficulty: "Medium",
    content: "Chocolate lava cakes are the perfect dessert for chocolate lovers and impressive enough for special occasions despite being surprisingly easy to make. The key is to not overbake them so they maintain that gorgeous molten center. Serve warm with a scoop of vanilla ice cream for the ultimate indulgence.",
    galleryImages: [
      "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    ingredients: [
      "6 ounces high-quality semi-sweet chocolate, chopped",
      "1/2 cup unsalted butter",
      "1/4 cup all-purpose flour",
      "1/2 cup powdered sugar",
      "1/8 teaspoon salt",
      "2 large eggs",
      "2 large egg yolks",
      "1 teaspoon vanilla extract",
      "Powdered sugar for dusting",
      "Fresh berries and vanilla ice cream, for serving"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Grease four 6-ounce ramekins and place on a baking sheet.",
      "In a microwave-safe bowl, combine chocolate and butter. Microwave in 30-second intervals, stirring between each, until melted and smooth.",
      "Whisk in flour, powdered sugar, and salt until combined.",
      "Add eggs, egg yolks, and vanilla extract. Whisk until smooth.",
      "Divide batter evenly among prepared ramekins.",
      "Bake for 12-14 minutes until sides are firm but centers are still soft.",
      "Let cool for 1 minute, then run a knife around the edges to loosen.",
      "Invert onto serving plates, dust with powdered sugar, and serve immediately with berries and ice cream."
    ]
  },
  {
    id: 8,
    title: "Apple Pie",
    slug: "apple-pie",
    description: "Classic American apple pie with a flaky buttery crust and spiced apple filling.",
    image: "https://images.unsplash.com/photo-1562007908-69cf18a6da04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "2 hours",
    difficulty: "Hard",
    content: "There's nothing more comforting than a slice of homemade apple pie! This recipe features a buttery, flaky crust and a perfectly spiced apple filling that's not too sweet. The secret is using a mix of tart and sweet apples for the best flavor and texture. Don't skip the step of chilling the dough - it's crucial for achieving that perfect flaky crust!",
    galleryImages: [
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1545396635-011a9a6a5650?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562007908-69cf18a6da04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "1 teaspoon salt",
      "1 tablespoon sugar",
      "1 cup cold unsalted butter, cubed",
      "1/4 to 1/2 cup ice water",
      "8 cups mixed apples (like Granny Smith and Honeycrisp), peeled and sliced",
      "3/4 cup granulated sugar",
      "2 tablespoons all-purpose flour",
      "1 tablespoon lemon juice",
      "1 teaspoon ground cinnamon",
      "1/4 teaspoon ground nutmeg",
      "1/4 teaspoon salt",
      "1 egg beaten with 1 tablespoon water, for egg wash",
      "Coarse sugar for sprinkling"
    ],
    instructions: [
      "For the crust: In a food processor, pulse flour, salt, and sugar. Add cold butter and pulse until mixture resembles coarse meal.",
      "Add ice water 1 tablespoon at a time, pulsing until dough just comes together.",
      "Divide dough in half, shape into discs, wrap in plastic, and refrigerate for at least 1 hour.",
      "For the filling: In a large bowl, combine sliced apples, sugar, flour, lemon juice, cinnamon, nutmeg, and salt.",
      "Preheat oven to 425°F (220°C). Roll out one disc of dough on a floured surface into a 12-inch circle.",
      "Transfer to a 9-inch pie dish. Add filling, mounding slightly in center.",
      "Roll out second disc of dough and place over filling. Trim edges, leaving 1-inch overhang.",
      "Fold overhang under itself and crimp edges decoratively. Cut several slits in top crust for steam vents.",
      "Brush with egg wash and sprinkle with coarse sugar.",
      "Bake for 20 minutes, then reduce temperature to 375°F (190°C) and bake for 40-45 minutes more until crust is golden and filling is bubbling.",
      "Cool on wire rack for at least 2 hours before serving."
    ]
  },
  {
    id: 9,
    title: "Raspberry Macarons",
    slug: "raspberry-macarons",
    description: "Delicate French cookies with crisp shells, chewy centers, and raspberry buttercream filling.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "3 hours",
    difficulty: "Expert",
    content: "Macarons may seem intimidating, but with patience and precision, you can create these elegant French confections at home. These raspberry macarons feature light almond shells with a hint of pink coloring and a vibrant raspberry buttercream filling. The key to perfect macarons is in the macaronage (folding) technique and allowing the shells to develop a skin before baking.",
    galleryImages: [
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1739190088256-8880fbd93bd4?q=80&w=1000",
      "https://images.unsplash.com/photo-1736730673809-8b40a7ecfd13?q=80&w=1000"
    ],
    ingredients: [
      "1 3/4 cups powdered sugar",
      "1 cup almond flour, finely ground",
      "3 large egg whites, at room temperature",
      "1/4 cup granulated sugar",
      "Pink gel food coloring",
      "1/2 cup unsalted butter, softened",
      "1 1/2 cups powdered sugar",
      "2 tablespoons raspberry puree (strained)",
      "1/2 teaspoon vanilla extract",
      "Pinch of salt"
    ],
    instructions: [
      "Line baking sheets with parchment paper. Prepare a piping bag with a round tip.",
      "Sift powdered sugar and almond flour together twice, discarding any large pieces.",
      "In a clean bowl, beat egg whites until foamy. Gradually add granulated sugar and beat until stiff peaks form.",
      "Add a small amount of pink gel food coloring.",
      "Fold in the dry ingredients in three additions, using the macaronage technique until batter flows like lava.",
      "Transfer batter to piping bag and pipe 1.5-inch circles onto prepared baking sheets.",
      "Tap sheets firmly against counter to remove air bubbles.",
      "Let shells sit at room temperature for 30-60 minutes until they form a skin.",
      "Preheat oven to 300°F (150°C). Bake one sheet at a time for 17-18 minutes.",
      "Let cool completely before removing from parchment.",
      "For filling, beat butter until creamy. Add powdered sugar, raspberry puree, vanilla, and salt.",
      "Pipe filling onto half the shells and sandwich with remaining shells.",
      "Refrigerate in an airtight container for 24 hours before serving for best texture and flavor."
    ]
  },
  {
    id: 10,
    title: "Sourdough Bread",
    slug: "sourdough-bread",
    description: "Artisan sourdough bread with a crispy crust and chewy, tangy interior.",
    image: "https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=1000",
    prepTime: "24 hours",
    difficulty: "Expert",
    content: "Sourdough bread is as much art as it is science. This recipe uses a mature sourdough starter to create a loaf with exceptional flavor, a crackling crust, and that distinctive open, chewy crumb. While it takes time, most of it is hands-off as the dough slowly ferments. The process is deeply satisfying, and the result is a bread that's leagues beyond anything you can buy at a supermarket.",
    galleryImages: [
      "https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=1000",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540916329799-e95bee36635f?q=80&w=1000"
    ],
    ingredients: [
      "150g mature sourdough starter (100% hydration)",
      "300g water, at room temperature",
      "500g bread flour",
      "10g salt",
      "Rice flour for dusting"
    ],
    instructions: [
      "In a large bowl, combine starter and water, mixing until starter is dissolved.",
      "Add flour and mix until no dry flour remains. Cover and let rest for 30 minutes (autolyse).",
      "Add salt and incorporate by gently squeezing and folding the dough.",
      "Perform a series of stretch and folds every 30 minutes for the first 2-3 hours of bulk fermentation.",
      "Let dough continue to ferment at room temperature until it has increased in volume by about 50% and shows bubbles around the edges, typically 4-6 hours total.",
      "Turn dough onto a lightly floured surface and pre-shape into a round. Let rest for 20 minutes.",
      "Shape into a tight boule or batard, then place in a flour-dusted banneton basket (seam side up).",
      "Cover and refrigerate overnight (8-12 hours).",
      "The next day, preheat oven with a Dutch oven inside to 500°F (260°C) for 1 hour.",
      "Turn dough out onto parchment paper, score the top with a sharp knife or razor.",
      "Carefully place in preheated Dutch oven, cover, and bake for 20 minutes.",
      "Reduce temperature to 450°F (230°C), remove lid, and bake for another 20-25 minutes until deeply golden.",
      "Cool completely on a wire rack for at least 2 hours before slicing."
    ]
  },
  {
    id: 11,
    title: "Red Velvet Cake",
    slug: "red-velvet-cake",
    description: "Layered crimson cake with cream cheese frosting and crunchy pecans.",
    image: "https://t3.ftcdn.net/jpg/02/64/84/68/360_F_264846889_3FTwwhQItDUy95Wdeaf8Qg4YLiiLNvrG.jpg",
    prepTime: "1.5 hours",
    difficulty: "Medium",
    content: "This iconic Southern cake gets its signature red color from cocoa powder reacting with acidic ingredients. The smooth cream cheese frosting provides the perfect tangy contrast to the mildly chocolatey layers.",
    galleryImages: [
      "https://t3.ftcdn.net/jpg/02/64/84/68/360_F_264846889_3FTwwhQItDUy95Wdeaf8Qg4YLiiLNvrG.jpg",
      "https://images.unsplash.com/photo-1543287920-26349b5b1376?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    ingredients: [
      "2 1/2 cups cake flour",
      "1 1/2 cups sugar",
      "1 teaspoon baking soda",
      "1 teaspoon cocoa powder",
      "1 teaspoon salt",
      "2 large eggs, at room temperature",
      "1 1/2 cups vegetable oil",
      "1 cup buttermilk, at room temperature",
      "2 tablespoons red food coloring",
      "1 teaspoon white vinegar",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat your oven to 350°F (175°C). Grease and flour three 9-inch cake pans, then line the bottoms with parchment paper to ensure easy release.",
      "In a large bowl, sift together the cake flour, sugar, cocoa powder, baking soda, and salt. This ensures even distribution and a smoother batter.",
      "In a separate bowl, whisk together the eggs, vegetable oil, buttermilk, red food coloring, vanilla extract, and white vinegar until well combined.",
      "Gradually add the dry ingredients to the wet ingredients, mixing on medium speed until the batter is smooth and fully incorporated. Be careful not to overmix, as this can lead to a denser cake.",
      "Evenly distribute the batter among the three prepared cake pans, smoothing the tops to ensure even baking.",
      "Place the pans in the preheated oven and bake for 25-30 minutes, or until a toothpick inserted into the center comes out clean.",
      "Once baked, remove the cakes from the oven and let them cool in the pans for about 10 minutes. Then, transfer them to wire racks to cool completely before applying the cream cheese frosting."
    ]
  },
  // New Recipes Added:
  {
    id: 12,
    title: "Classic Carrot Cake",
    slug: "classic-carrot-cake",
    description: "Moist and spiced carrot cake layered with rich cream cheese frosting.",
    image: "https://www.onceuponachef.com/images/2024/03/carrot-cake.jpg",
    prepTime: "1.5 hours",
    difficulty: "Medium",
    content: "This classic carrot cake is full of warm spices and tender carrots, complemented by a tangy cream cheese frosting. It's perfect for celebrations or a comforting dessert.",
    galleryImages: [
      "https://www.onceuponachef.com/images/2024/03/carrot-cake.jpg",
      "https://www.lifeloveandsugar.com/wp-content/uploads/2023/08/Carrot-Cake4.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHP7QTbZvSSVymLYyNFvpaDYv-EObRqTNlsbu7rxQe2nLz3QRy0sUAVzUVUe-691MWuhE&usqp=CAU"
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1 teaspoon ground cinnamon",
      "1/2 teaspoon ground nutmeg",
      "1/4 teaspoon ground ginger",
      "3 large eggs",
      "1 1/2 cups granulated sugar",
      "1 cup vegetable oil",
      "2 cups grated carrots",
      "1 cup crushed walnuts (optional)",
      "For the frosting:",
      "8 oz cream cheese, softened",
      "1/4 cup unsalted butter, softened",
      "2 cups powdered sugar",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour a 9-inch round cake pan.",
      "In a bowl, sift together flour, baking powder, salt, cinnamon, nutmeg, and ginger.",
      "In a separate bowl, beat eggs and sugar until light and fluffy. Slowly add the oil.",
      "Stir in grated carrots and walnuts (if using). Gradually mix in the dry ingredients.",
      "Pour batter into the prepared pan and bake for 35-40 minutes, or until a toothpick inserted in the center comes out clean.",
      "While cake cools, prepare the frosting: Beat cream cheese and butter until smooth, then gradually add powdered sugar and vanilla extract.",
      "Once the cake is completely cool, frost evenly and serve."
    ]
  },
  {
    id: 13,
    title: "Homestyle Banana Bread",
    slug: "homestyle-banana-bread",
    description: "Moist, flavorful banana bread perfect for a quick snack or breakfast treat.",
    image: "https://www.wyseguide.com/wp-content/uploads/2023/01/Grandmas-Classic-Banana-Bread-7.jpg",
    prepTime: "1 hour",
    difficulty: "Easy",
    content: "A comforting and easy-to-make banana bread bursting with ripe bananas and a hint of cinnamon. It’s a great way to use overripe bananas for a delicious treat any time of day.",
    galleryImages: [
      "https://www.wyseguide.com/wp-content/uploads/2023/01/Grandmas-Classic-Banana-Bread-7.jpg",
      "https://www.wyseguide.com/wp-content/uploads/2023/01/Grandmas-Classic-Banana-Bread-19.jpg",
      "https://www.wyseguide.com/wp-content/uploads/2023/01/Grandmas-Classic-Banana-Bread-Ingredients.jpg"
    ],
    ingredients: [
      "2-3 ripe bananas, mashed",
      "1/3 cup melted butter",
      "3/4 cup sugar",
      "1 large egg, beaten",
      "1 teaspoon vanilla extract",
      "1 teaspoon baking soda",
      "Pinch of salt",
      "1 1/2 cups all-purpose flour"
    ],
    instructions: [
      "Preheat your oven to 350°F (175°C) and grease a 4x8 inch loaf pan.",
      "In a large mixing bowl, mash the ripe bananas with a fork until smooth.",
      "Stir the melted butter into the mashed bananas.",
      "Mix in the baking soda and salt. Stir in the sugar, beaten egg, and vanilla extract.",
      "Slowly blend in the flour until just combined.",
      "Pour the batter into the prepared loaf pan.",
      "Bake for 60-65 minutes, or until a tester inserted into the center comes out clean.",
      "Remove from oven and let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely."
    ]
  },
  {
    id: 14,
    title: "Southern Peach Cobbler",
    slug: "southern-peach-cobbler",
    description: "Sweet and juicy peaches topped with a tender, biscuit-like crust.",
    image: "https://southernfoodandfun.com/wp-content/uploads/2024/05/southern-peach-cobbler-2024-feature-1-500x500.jpg",
    prepTime: "1 hour",
    difficulty: "Medium",
    content: "This southern peach cobbler features fresh peaches in a spiced syrup, topped with a light, buttery crust. Serve warm with a scoop of vanilla ice cream for extra indulgence.",
    galleryImages: [
      "https://southernfoodandfun.com/wp-content/uploads/2024/05/southern-peach-cobbler-2024-feature-1-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKiGFN-A0dfNwQmCDaDKY5xCgENvvitIMQyP3wJMjjWAShYwFXLd1BW-soDslCTgI1eg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkALqW7_OAyJwg_lxLidIT4R-k-VCNAb21UR2VkM8nO14K3du4j63BAYD_boPIgG4aTA&usqp=CAU"
    ],
    ingredients: [
      "6-8 fresh peaches, peeled, pitted, and sliced",
      "1/2 cup granulated sugar",
      "1/4 cup brown sugar",
      "1 teaspoon ground cinnamon",
      "1/4 teaspoon ground nutmeg",
      "1 tablespoon lemon juice",
      "2 tablespoons all-purpose flour",
      "For the topping:",
      "1 cup all-purpose flour",
      "1/4 cup granulated sugar",
      "1 1/2 teaspoons baking powder",
      "1/4 teaspoon salt",
      "1/2 cup milk",
      "1/4 cup unsalted butter, melted"
    ],
    instructions: [
      "Preheat your oven to 375°F (190°C).",
      "In a large bowl, combine peaches, granulated sugar, brown sugar, cinnamon, nutmeg, lemon juice, and flour. Toss to coat the peaches evenly.",
      "Transfer the peach mixture to a greased 9x9 inch baking dish.",
      "In a separate bowl, whisk together topping ingredients until smooth.",
      "Drop spoonfuls of the topping evenly over the peaches.",
      "Bake for 35-40 minutes, or until the topping is golden and the peach filling is bubbly.",
      "Allow to cool slightly before serving with ice cream, if desired."
    ]
  },
  {
    id: 15,
    title: "Nutella Stuffed Brownies",
    slug: "nutella-stuffed-brownies",
    description: "Rich, fudgy brownies with a gooey Nutella center that will delight any chocolate lover.",
    image: "https://photos.bigoven.com/recipe/hero/nutella-marshmallow-stuffed-br-9be9d9.jpg",
    prepTime: "45 mins",
    difficulty: "Medium",
    content: "These indulgent Nutella stuffed brownies combine a dense, chocolatey base with a surprise molten center of Nutella. Perfect for those who crave an extra decadent chocolate treat.",
    galleryImages: [
      "https://photos.bigoven.com/recipe/hero/nutella-marshmallow-stuffed-br-9be9d9.jpg",
      "https://fitwafflekitchen.com/wp-content/uploads/2021/10/Kinder-and-Nutella-stuffed-brownies-resize-500x500.jpg",
      "https://sallysbakingaddiction.com/wp-content/uploads/2016/04/easy-nutella-brownies-2-1.jpg"
    ],
    ingredients: [
      "1/2 cup unsalted butter",
      "8 ounces semi-sweet chocolate, chopped",
      "1 cup granulated sugar",
      "1/2 cup brown sugar",
      "3 large eggs",
      "1 teaspoon vanilla extract",
      "3/4 cup all-purpose flour",
      "1/4 cup cocoa powder",
      "1/2 teaspoon salt",
      "Nutella (about 1/2 cup)"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease a 9x9 inch baking pan and line with parchment paper.",
      "In a saucepan, melt butter and chocolate over low heat, stirring until smooth. Let cool slightly.",
      "In a large bowl, whisk together sugars, eggs, and vanilla extract until combined. Stir in the melted chocolate mixture.",
      "Fold in flour, cocoa powder, and salt until just incorporated.",
      "Pour half of the batter into the pan. Drop spoonfuls of Nutella evenly over the batter, then top with the remaining batter.",
      "Swirl gently with a knife to create a marbled effect.",
      "Bake for 25-30 minutes until a toothpick inserted into the center comes out with moist crumbs.",
      "Let cool completely before cutting into squares."
    ]
  },
  {
    id: 16,
    title: "Blueberry Muffins",
    slug: "blueberry-muffins",
    description: "Soft and moist muffins bursting with fresh blueberries.",
    image: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2010/08/perfect-blueberry-muffins-scaled.jpg?fit=1200%2C800&ssl=1",
    prepTime: "30 mins",
    difficulty: "Easy",
    content: "These blueberry muffins are perfect for breakfast or a snack. Packed with fresh blueberries and a hint of lemon zest, they're light, moist, and absolutely delightful.",
    galleryImages: [
      "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2010/08/perfect-blueberry-muffins-scaled.jpg?fit=1200%2C800&ssl=1",
      "https://kickassbaker.com/wp-content/uploads/2023/05/jumbo-blueberry-muffins-with-sour-cream-1x1-1.jpg",
      "https://butternutbakeryblog.com/wp-content/uploads/2022/02/blueberry-muffins.jpg"
    ],
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3/4 cup granulated sugar",
      "1/2 tsp salt",
      "2 tsp baking powder",
      "1/3 cup vegetable oil",
      "1 large egg",
      "1/3 - 1/2 cup milk",
      "1 tsp vanilla extract",
      "1 cup fresh blueberries",
      "Zest of 1 lemon"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and line a muffin tin with paper liners.",
      "In a bowl, whisk together flour, sugar, salt, and baking powder.",
      "In another bowl, mix vegetable oil, egg, milk, and vanilla extract until smooth.",
      "Gently fold the wet ingredients into the dry ingredients until just combined.",
      "Carefully fold in blueberries and lemon zest.",
      "Spoon the batter into the muffin cups, filling each about 2/3 full.",
      "Bake for 20-25 minutes or until a toothpick inserted in the center comes out clean.",
      "Allow muffins to cool in the tin for 5 minutes before transferring to a wire rack."
    ]
  },
  {
    id: 17,
    title: "Pumpkin Spice Cookies",
    slug: "pumpkin-spice-cookies",
    description: "Soft and chewy cookies with the warm flavors of pumpkin and spices.",
    image: "https://www.justsotasty.com/wp-content/uploads/2016/09/Pumpkin-Cookies-5.jpg",
    prepTime: "35 mins",
    difficulty: "Medium",
    content: "These pumpkin spice cookies combine the classic flavors of fall into a soft, chewy treat. Perfect for autumn gatherings or a cozy snack.",
    galleryImages: [
      "https://www.justsotasty.com/wp-content/uploads/2016/09/Pumpkin-Cookies-5.jpg",
      "https://www.justsotasty.com/wp-content/uploads/2016/09/Pumpkin-Spice-Cookies.jpg",
    ],
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "1/2 tsp baking soda",
      "1/2 tsp salt",
      "1 tsp pumpkin pie spice",
      "1/2 cup unsalted butter, softened",
      "1/2 cup granulated sugar",
      "1/2 cup brown sugar",
      "1 cup pumpkin puree",
      "1 large egg",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C) and line a baking sheet with parchment paper.",
      "In a bowl, whisk together flour, baking soda, salt, and pumpkin pie spice.",
      "In a separate bowl, cream the butter with both sugars until light and fluffy.",
      "Beat in the pumpkin puree, egg, and vanilla extract until well combined.",
      "Gradually mix in the dry ingredients until just incorporated.",
      "Drop rounded tablespoons of dough onto the prepared baking sheet.",
      "Bake for 10-12 minutes until the edges are lightly golden.",
      "Cool on the baking sheet for 5 minutes before transferring to a wire rack."
    ]
  },
  {
    id: 18,
    title: "Cranberry Orange Scones",
    slug: "cranberry-orange-scones",
    description: "Tart cranberries and bright orange zest make these scones a perfect morning treat.",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2015/11/cranberry-orange-scones-3.jpg",
    prepTime: "40 mins",
    difficulty: "Medium",
    content: "These scones combine the tartness of cranberries with the zest of orange for a unique twist on a traditional treat. Enjoy them with a cup of tea or coffee.",
    galleryImages: [
      "https://sallysbakingaddiction.com/wp-content/uploads/2015/11/cranberry-orange-scones-3.jpg",
      "https://sallysbakingaddiction.com/wp-content/uploads/2015/11/cranberry-orange-scones-2.jpg",
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1/3 cup granulated sugar",
      "1 tablespoon baking powder",
      "1/2 tsp salt",
      "1/2 cup unsalted butter, cold and cubed",
      "1/2 cup heavy cream",
      "1 large egg",
      "1 tsp vanilla extract",
      "1 cup dried cranberries",
      "Zest of 1 orange",
      "2 tbsp orange juice"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
      "Cut in the cold butter until the mixture resembles coarse crumbs.",
      "In another bowl, whisk together heavy cream, egg, vanilla, orange zest, and orange juice.",
      "Combine the wet and dry ingredients until just mixed, then fold in dried cranberries.",
      "Turn dough onto a floured surface and gently pat into a 1-inch thick circle.",
      "Cut into 8 wedges and place them on the prepared baking sheet.",
      "Bake for 18-22 minutes until golden brown.",
      "Cool slightly before serving."
    ]
  },
  {
    id: 19,
    title: "Banana Walnut Bread",
    slug: "banana-walnut-bread",
    description: "A delicious twist on classic banana bread with crunchy walnuts.",
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/BananaWalnutLoafCake-b80daa2.jpg?quality=90&webp=true&resize=600,545",
    prepTime: "1 hour",
    difficulty: "Easy",
    content: "This banana walnut bread is a moist, flavorful twist on the classic. The walnuts add a delightful crunch and nutty flavor that pairs perfectly with ripe bananas.",
    galleryImages: [
      "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/BananaWalnutLoafCake-b80daa2.jpg?quality=90&webp=true&resize=600,545",
      "https://melaniemakes.com/images/2014/10/chocolate-chip-walnut-banana-bread-9.jpg",
      "https://melaniemakes.com/images/2014/10/chocolate-chip-walnut-banana-bread-5-1.jpg"
    ],
    ingredients: [
      "3 ripe bananas, mashed",
      "1/3 cup melted butter",
      "1 cup sugar",
      "1 large egg, beaten",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "Pinch of salt",
      "1 1/2 cups all-purpose flour",
      "1/2 cup chopped walnuts"
    ],
    instructions: [
      "Preheat your oven to 350°F (175°C) and grease a 4x8 inch loaf pan.",
      "In a large bowl, mash the ripe bananas with a fork until smooth.",
      "Stir in the melted butter, then mix in the sugar, egg, and vanilla.",
      "Sprinkle baking soda and salt over the mixture and stir to combine.",
      "Gently fold in the flour and chopped walnuts until just mixed.",
      "Pour the batter into the prepared loaf pan and smooth the top.",
      "Bake for 60-65 minutes or until a tester inserted into the center comes out clean.",
      "Cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
    ]
  },
  {
    id: 20,
    title: "Double Chocolate Chip Muffins",
    slug: "double-chocolate-chip-muffins",
    description: "Rich chocolate muffins loaded with chocolate chips for an extra indulgent treat.",
    image: "https://www.piesandtacos.com/wp-content/uploads/2023/02/double-chocolate-muffins-3-1365x2048.jpg",
    prepTime: "35 mins",
    difficulty: "Medium",
    content: "These double chocolate chip muffins are every chocolate lover's dream. Soft, moist, and bursting with chocolate chips, they’re perfect for breakfast or dessert.",
    galleryImages: [
      "https://www.piesandtacos.com/wp-content/uploads/2023/02/double-chocolate-muffins-3-1365x2048.jpg",
      "https://www.piesandtacos.com/wp-content/uploads/2023/02/double-chocolate-muffins-2-1365x2048.jpg",
      "https://www.piesandtacos.com/wp-content/uploads/2023/02/Untitled-1200-x-1800-px-1200-x-1800-px-41.png"
    ],
    ingredients: [
      "1 3/4 cups all-purpose flour",
      "1/4 cup cocoa powder",
      "1/2 cup sugar",
      "1/2 tsp baking soda",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "3/4 cup milk",
      "1/3 cup vegetable oil",
      "1 large egg",
      "1 tsp vanilla extract",
      "1 cup chocolate chips",
      "Optional: 1/4 cup cocoa nibs"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and line a muffin tin with paper liners.",
      "In a large bowl, whisk together flour, cocoa powder, sugar, baking soda, baking powder, and salt.",
      "In another bowl, mix milk, vegetable oil, egg, and vanilla extract.",
      "Combine the wet ingredients with the dry ingredients until just mixed.",
      "Fold in the chocolate chips (and cocoa nibs, if using).",
      "Divide the batter evenly among the muffin cups.",
      "Bake for 20-25 minutes until a toothpick inserted in the center comes out clean.",
      "Let cool in the pan for 5 minutes before transferring to a wire rack."
    ]
  },
  {
    id: 21,
    title: "Caramel Apple Crumble",
    slug: "caramel-apple-crumble",
    description: "Warm and comforting apple crumble drizzled with homemade caramel sauce.",
    image: "https://img.taste.com.au/5U_OnQvL/w720-h480-cfill-q80/taste/2016/11/salted-caramel-apple-crumble-88495-1.jpeg",
    prepTime: "1 hour",
    difficulty: "Easy",
    content: "This caramel apple crumble is a delightful mix of tart apples, sweet caramel, and a crunchy topping. Perfect for a cozy dessert on a cool day.",
    galleryImages: [
      "https://img.taste.com.au/5U_OnQvL/w720-h480-cfill-q80/taste/2016/11/salted-caramel-apple-crumble-88495-1.jpeg",
      "https://www.closetcooking.com/wp-content/uploads/2015/12/CaramelAppleCrumbleCheesecakeDip8007963.jpg",
      "https://www.closetcooking.com/wp-content/uploads/2015/12/CaramelAppleCrumbleCheesecakeDip8007981.jpg"
    ],
    ingredients: [
      "6 cups apples, peeled and sliced",
      "1/2 cup granulated sugar",
      "1 tsp cinnamon",
      "1/4 tsp nutmeg",
      "1 cup all-purpose flour",
      "1/2 cup rolled oats",
      "1/2 cup brown sugar",
      "1/2 cup unsalted butter, cold and cubed",
      "For the caramel sauce:",
      "1 cup sugar",
      "1/2 cup heavy cream",
      "4 tbsp unsalted butter"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and grease a 9x9 inch baking dish.",
      "In a bowl, toss sliced apples with granulated sugar, cinnamon, and nutmeg.",
      "Transfer the apples to the baking dish.",
      "For the crumble topping, combine flour, oats, and brown sugar.",
      "Cut in the cold butter until the mixture forms coarse crumbs.",
      "Sprinkle the topping evenly over the apples.",
      "Bake for 40-45 minutes until the apples are tender and the topping is golden.",
      "Meanwhile, prepare the caramel sauce by melting sugar in a saucepan over medium heat until amber-colored, then stir in heavy cream and butter until smooth.",
      "Drizzle the warm caramel sauce over the apple crumble before serving."
    ]
  },
  {
    id: 22,
    title: "Coconut Cream Pie",
    slug: "coconut-cream-pie",
    description: "A tropical delight featuring a flaky crust filled with creamy coconut custard and topped with whipped cream.",
    image: "https://www.persnicketyplates.com/wp-content/uploads/2012/06/coconut-cream-pie33-SQUARE.jpg",
    prepTime: "2 hours",
    difficulty: "Medium",
    content: "This coconut cream pie delivers a refreshing tropical taste. The silky coconut custard filling is perfectly balanced by a crisp, flaky crust and fresh whipped cream topping.",
    galleryImages: [
      "https://www.persnicketyplates.com/wp-content/uploads/2012/06/coconut-cream-pie33-SQUARE.jpg",
      "https://www.persnicketyplates.com/wp-content/uploads/2012/06/coconut-cream-pie40.jpg"
    ],
    ingredients: [
      "For the crust:",
      "1 1/2 cups graham cracker crumbs",
      "1/3 cup melted butter",
      "1/4 cup sugar",
      "For the filling:",
      "2 cups coconut milk",
      "1/2 cup sugar",
      "1/4 cup cornstarch",
      "4 egg yolks",
      "1 cup shredded coconut",
      "1 tsp vanilla extract",
      "For the topping:",
      "1 cup heavy cream",
      "2 tbsp powdered sugar",
      "Optional: 1/2 tsp coconut extract"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Combine graham cracker crumbs, melted butter, and sugar; press into a pie dish to form a crust.",
      "Bake the crust for 10 minutes and let cool.",
      "In a saucepan, whisk together coconut milk, sugar, cornstarch, and egg yolks over medium heat until thickened.",
      "Stir in shredded coconut and vanilla extract.",
      "Pour the custard into the cooled crust and smooth the top.",
      "Chill in the refrigerator for at least 2 hours.",
      "Whip the heavy cream with powdered sugar (and coconut extract, if using) until stiff peaks form, then spread over the pie before serving."
    ]
  },
  {
    id: 23,
    title: "Vanilla Bean Panna Cotta",
    slug: "vanilla-bean-panna-cotta",
    description: "An elegant Italian dessert featuring a silky smooth panna cotta with a hint of vanilla bean.",
    image: "https://img.taste.com.au/56o1su3F/w720-h480-cfill-q80/taste/2016/11/vanilla-bean-panna-cotta-104789-1.jpeg",
    prepTime: "4 hours (includes chilling time)",
    difficulty: "Medium",
    content: "This classic vanilla bean panna cotta is a luxurious and simple dessert. Its creamy texture and delicate vanilla flavor make it an excellent end to any meal.",
    galleryImages: [
      "https://img.taste.com.au/56o1su3F/w720-h480-cfill-q80/taste/2016/11/vanilla-bean-panna-cotta-104789-1.jpeg",
      "https://images.squarespace-cdn.com/content/v1/5cfa79cfbb285600015a6287/1596067096962-FK1WN9ETRDTWV6VNXVHC/wild+berry+panna+cotta+1.jpg?format=2500w"
    ],
    ingredients: [
      "2 cups heavy cream",
      "1 cup whole milk",
      "1/2 cup sugar",
      "1 vanilla bean, split and scraped",
      "2 1/2 teaspoons gelatin powder",
      "3 tablespoons cold water"
    ],
    instructions: [
      "In a small bowl, sprinkle gelatin over cold water and let stand for 5 minutes.",
      "In a saucepan, combine heavy cream, milk, sugar, and vanilla bean seeds (and pod). Heat until sugar dissolves; do not boil.",
      "Remove from heat and discard the vanilla pod.",
      "Stir in the gelatin mixture until fully dissolved.",
      "Pour the mixture into ramekins or serving glasses.",
      "Refrigerate for at least 4 hours until set.",
      "Serve chilled, optionally garnished with fresh berries or mint."
    ]
  },
  {
    id: 24,
    title: "Espresso Tiramisu",
    slug: "espresso-tiramisu",
    description: "A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    image: "https://i.imgur.com/oweC1gg.jpg",
    prepTime: "4 hours (plus chilling time)",
    difficulty: "Hard",
    content: "This espresso tiramisu is a decadent dessert that brings together the rich flavors of coffee and creamy mascarpone. Perfect for special occasions and coffee lovers.",
    galleryImages: [
      "https://i.imgur.com/oweC1gg.jpg"
    ],
    ingredients: [
      "6 egg yolks",
      "3/4 cup sugar",
      "1 cup mascarpone cheese",
      "1 1/2 cups heavy cream",
      "2 cups strong brewed espresso, cooled",
      "2 tablespoons coffee liqueur (optional)",
      "1 package ladyfingers",
      "Cocoa powder for dusting"
    ],
    instructions: [
      "In a bowl, whisk egg yolks with sugar until pale and creamy.",
      "Mix in the mascarpone cheese until smooth.",
      "In a separate bowl, whip the heavy cream until stiff peaks form, then fold into the mascarpone mixture.",
      "Combine cooled espresso and coffee liqueur (if using) in a shallow dish.",
      "Dip each ladyfinger briefly into the espresso mixture and layer in a serving dish.",
      "Spread a layer of the mascarpone cream over the ladyfingers.",
      "Repeat layers until all ingredients are used, finishing with a cream layer.",
      "Dust the top with cocoa powder and refrigerate for at least 4 hours before serving."
    ]
  },
  {
    id: 25,
    title: "Key Lime Pie",
    slug: "key-lime-pie",
    description: "A tangy and refreshing dessert with a buttery graham cracker crust and zesty lime filling.",
    image: "https://www.allrecipes.com/thmb/HQF1EDpzay2G-ksxdNNdSGWcZa8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12698-Easy-Key-Lime-Pie-ddmfs-103444-4x3-1-eb1a59500e384b2b8939094ce18d08be.jpg",
    prepTime: "1.5 hours (plus chilling time)",
    difficulty: "Medium",
    content: "This key lime pie is a perfect balance of tart and sweet, with a smooth, creamy filling nestled in a crisp graham cracker crust. A slice of refreshing indulgence.",
    galleryImages: [
      "https://www.allrecipes.com/thmb/HQF1EDpzay2G-ksxdNNdSGWcZa8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12698-Easy-Key-Lime-Pie-ddmfs-103444-4x3-1-eb1a59500e384b2b8939094ce18d08be.jpg",
      "https://www.allrecipes.com/thmb/VS_uOAJ9iWAls7lXszNbURAiHlc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12698-EasyKeyLimePie-ddmfs-step4-103424-4x3-8dc83a3c7c4846228c951415af927b2c.jpg",
      "https://www.allrecipes.com/thmb/s0DjcvH3Z7MRPoEQcJ5t-AWyVVE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12698-EasyKeyLimePie-ddmfs-Step3-4x3.5168-5abb7456c2e64b7ea78ee4fd423b9b1a.jpg"
    ],
    ingredients: [
      "For the crust:",
      "1 1/2 cups graham cracker crumbs",
      "1/3 cup melted butter",
      "1/4 cup sugar",
      "For the filling:",
      "3 cups sweetened condensed milk",
      "1/2 cup key lime juice",
      "Zest of 2 limes",
      "For the topping:",
      "1 cup heavy cream",
      "2 tbsp powdered sugar"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Mix graham cracker crumbs, melted butter, and sugar, then press into a 9-inch pie dish to form the crust.",
      "Bake the crust for 10 minutes and let cool.",
      "In a bowl, whisk together sweetened condensed milk, key lime juice, and lime zest until smooth.",
      "Pour the filling into the cooled crust and smooth the top.",
      "Refrigerate the pie for at least 2 hours until set.",
      "In a separate bowl, whip heavy cream with powdered sugar until soft peaks form, then spread over the pie before serving."
    ]
  }
];
