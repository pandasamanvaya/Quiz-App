package main

import (
	"fmt"
	"github.com/gin-contrib/cors" // Why do we need this package?
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite" // If you want to use mysql or any other db, replace this line
	"reflect"
)

var db *gorm.DB // declaring the db globally
var err error

//Database Component
type Person struct {
	ID             uint   `json:"id"`
	UserName       string `json:"username"`
	Password       string `json:"password"`
	Sports_score   uint   `json:"sports_score"`
	Politics_score uint   `json:"politics_score"`
}
type Sports struct {
	Qno       uint   `json:"qno"`
	Questions string `json:"question"`
	Answers   string `json:"answer"`
	Option1   string `json:"option_a"`
	Option2   string `json:"option_b"`
	Option3   string `json:"option_c"`
	Option4   string `json:"option_d"`
	Type      string `json:"type"`
	Image     bool   `json:"image"`
}
type Politics struct {
	Qno       uint   `json:"qno"`
	Questions string `json:"question"`
	Answers   string `json:"answer"`
	Option1   string `json:"option_a"`
	Option2   string `json:"option_b"`
	Option3   string `json:"option_c"`
	Option4   string `json:"option_d"`
	Type      string `json:"type"`
	Image     bool   `json:"image"`
	Audio     bool   `json:"audio"`
}

//Main Function
func main() {
	db, err = gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		fmt.Println(err)
	}
	defer db.Close()

	db.AutoMigrate(&Person{}, &Sports{}, &Politics{})

	r := gin.Default()
	r.GET("/people/", GetPeople)
	r.GET("/sport/:id", GetSport)
	r.GET("/sport/", GetAllSport)
	r.GET("/politics/", GetAllPolitics)
	r.GET("/politics/:id", GetPolitics)
	r.GET("/people/:id/:user_name", GetPerson)
	r.GET("/people/:id", GetUser)
	r.GET("/person/:id", GetId)
	r.POST("/people", CreatePerson)
	r.POST("/sport", AddSportQuestion)
	r.POST("/politics", AddPoliticsQuestion)
	r.PUT("/people/:id", UpdatePerson)
	r.PUT("/sport/:id", UpdateSports)
	r.PUT("/politics/:id", UpdatePolitics)
	r.DELETE("/people/:id", DeletePerson)
	r.DELETE("/sport/:id", DeleteSport)
	r.DELETE("/politics/:id", DeletePolitics)
	r.Use((cors.Default()))
	r.Run(":8080") // Run on port 8080
}

func DeletePerson(c *gin.Context) {
	id := c.Params.ByName("id")
	var person Person
	d := db.Where("id = ?", id).Delete(&person)
	fmt.Println(d)
	c.Header("access-control-allow-origin", "*")
	c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func DeleteSport(c *gin.Context) {
	id := c.Params.ByName("id")
	var sport Sports
	d := db.Where("qno = ?", id).Delete(&sport)
	fmt.Println(d)
	c.Header("access-control-allow-origin", "*")
	c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func DeletePolitics(c *gin.Context) {
	id := c.Params.ByName("id")
	var politics Politics
	d := db.Where("qno = ?", id).Delete(&politics)
	fmt.Println(d)
	c.Header("access-control-allow-origin", "*")
	c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func UpdatePerson(c *gin.Context) {
	var person Person
	id := c.Params.ByName("id")
	if err := db.Where("id = ?", id).First(&person).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&person)
	db.Save(&person)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, person)
}

func UpdatePolitics(c *gin.Context) {
	var politics Politics
	id := c.Params.ByName("id")
	if err := db.Where("id = ?", id).First(&politics).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&politics)
	db.Save(&politics)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, politics)
}

func UpdateSports(c *gin.Context) {
	var sport Sports
	id := c.Params.ByName("id")
	if err := db.Where("qno = ?", id).First(&sport).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&sport)
	db.Save(&sport)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, sport)
}

func CreatePerson(c *gin.Context) {
	var person Person
	c.BindJSON(&person)
	db.Create(&person)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, person)
}

func AddSportQuestion(c *gin.Context) {
	var sport Sports
	c.BindJSON(&sport)
	db.Create(&sport)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, sport)
}

func AddPoliticsQuestion(c *gin.Context) {
	var politics Politics
	c.BindJSON(&politics)
	db.Create(&politics)
	c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
	c.JSON(200, politics)
}

func typeof(v interface{}) string {
	return reflect.TypeOf(v).String()
}
func GetPerson(c *gin.Context) {
	user := c.Params.ByName("user_name")
	var person Person

	if err := db.Where("user_name = ?", user).First(&person).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, person)
	}
}

func GetUser(c *gin.Context) {
	id := c.Params.ByName("id")
	var person Person
	var people []Person

	if id == "SportsLeaderBoard" {
		if err := db.Order("sports_score desc").Find(&people).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, people)
		}
	} else if id == "PoliticsLeaderBorder" {

		if err := db.Order("politics_score desc").Find(&people).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, people)
		}
	} else if id == "OverallLeaderBoard" {
		if err := db.Order("sports_score+politics_score desc").Find(&people).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, people)
		}
	} else {
		if err := db.Where("id = ?", id).First(&person).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, person)
		}
	}
}

func GetId(c *gin.Context) {
	id := c.Params.ByName("id")
	var person Person

	if err := db.Where("user_name = ?", id).First(&person).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, person)
	}
}

func GetPeople(c *gin.Context) {
	var people []Person
	if err := db.Find(&people).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, people)
	}
}

func GetSport(c *gin.Context) {
	id := c.Params.ByName("id")
	var sports []Sports
	var sport Sports
	if id == "Cricket" {
		if err := db.Where("type = ?", "Cricket").Find(&sports).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, sports)
		}
	} else if id == "Football" {
		if err := db.Where("type = ?", "Football").Find(&sports).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, sports)
		}
	} else {
		if err := db.Where("qno = ?", id).First(&sport).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, sport)
		}
	}
}

func GetAllSport(c *gin.Context) {
	var sports []Sports
	if err := db.Find(&sports).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, sports)
	}
}

func GetAllPolitics(c *gin.Context) {
	var politics []Politics
	if err := db.Find(&politics).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
		c.JSON(200, politics)
	}
}

func GetPolitics(c *gin.Context) {
	id := c.Params.ByName("id")
	var poltics []Politics
	if id == "World" {
		if err := db.Where("type = ?", "World").Find(&poltics).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, poltics)
		}
	} else if id == "India" {
		if err := db.Where("type = ?", "India").Find(&poltics).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, poltics)
		}
	} else {
		if err := db.Where("qno = ?", id).First(&poltics).Error; err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
			c.JSON(200, poltics)
		}
	}
}
