import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

export default function ProductCard({ product, onAddToCart }) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardMedia // component do mui
                component="img"       // avisa o MUI para renderizar via <img> do HTML
                height="180"
                image={product.image} // do payload json
                alt={product.title}   // do payload json
                sx={{
                    objectFit: 'contain', 
                    padding: 2        // regras para a foto caber sem esticar ou overflow
                }}
            />

        <CardContent sx={{ flexGrow: 1}}>
            <Typography variant="subtitle2" noWrap title={product.title}>
                {product.title}
            </Typography>

            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                R${product.price.toFixed(2)}
            </Typography>
        </CardContent>

        <CardActions>
            <Button
                fullWidth
                variant="contained"
                onClick={() => onAddToCart(product)} 
                // arrow function onClick, passa produto
                // como param
            >
                Adicionar jogo ao carrinho
            </Button>
        </CardActions>
    </Card>
    )
}