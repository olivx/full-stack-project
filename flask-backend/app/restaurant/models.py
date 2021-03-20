from app.ext.database import db
from app.ext.serializer import ma


class Restaurant(db.Model):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    deliveryEstimate = db.Column(db.String(20))
    rating = db.Column(db.Float())
    imagePath = db.Column(db.String(255))
    about = db.Column(db.Text(), nullable=False)
    hours = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return '<Restaurant %r>' % self.name

    def __str__(self):
        return self.name


class RestaurantSerializer(ma.Schema):
    class Meta:
        fields = ('name', 'category')
