package entity;


public class Person {
    private String fname;
    private String lName;
    private String phone;

    public Person(String fname, String lName, String phone) {
        this.fname = fname;
        this.lName = lName;
        this.phone = phone;
    }
        
    public void setFname(String fname) {
        this.fname = fname;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
           
    public String getFname() {
        return fname;
    }

    public String getlName() {
        return lName;
    }

    public String getPhone() {
        return phone;
    }
    
    
}
