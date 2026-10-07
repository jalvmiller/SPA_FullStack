import {
    Drawer, Box, Typography, Divider, List,
    ListItem, ListItemText, IconButton, Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartDrawer({
    isOpen, onClose, cart, onRemove, onClear,
}) {
    return (
        // Drawer, componente do MUI para gavetas, abre da direita por conta do anchor right
        // os outros atributos são propriedades do componente


        <Drawer anchor="right" open={isOpen} onClose={onClose}>
            {/*Box é um wrapper generico do MUI, usado como container
                sx = style extension, permite aplicar estilos CSS direto,
                width = largura, padding = preenchimento interno
            */}


            <Box sx={{ width: 320, padding: 2 }}>
                {/* Typography define o tipo do texto
                    variant = variações de fonte
                    gutterBottom = adiciona margem inferior
                */}
                <Typography variant="h6" gutterBottom>
                    Meu Carrinho
                </Typography>

                {/* divider com margin bottom */}
                <Divider sx={{ mb: 2 }} />

                {/* se o carrinho estiver vazio, exibe a mensagem */}
                {cart.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        O carrinho está vazio.
                    </Typography>
                ) : (
                    <>

                        {/* se o carrinho estiver preenchido, exibe a lista de itens */}
                        <List> {/* mapeia cada item do carrinho para um ListItem */}
                            {cart.map((item, index) => (
                                // Inicio do item
                                // Inicio do item
                                <ListItem
                                    // key define uma chave unica para cada item, 
                                    // evita bugs com renderização
                                    key={index}

                                    //secondaryAction é o icone que fica ao lado do item
                                    secondaryAction={
                                        //IconButton, icone do MUI para ações
                                        // edge = posição do icone, end = direita
                                        // onClick chama a função onRemove, passada por props
                                        <IconButton edge="end" onClick={() => onRemove(item.id)}>
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText
                                        // primary é o titulo do item, passado por props
                                        primary={item.title}
                                        // secondary é o preço do item, passado por props
                                        secondary={`R$ ${item.price.toFixed(2)}`}
                                        // primaryTypographyProps é um objeto que define estilos
                                        // para o texto primario
                                        primaryTypographyProps={{ noWrap: true, width: 180 }}
                                    />
                                </ListItem>
                                // Fim do item 
                                // Fim do item
                            ))}
                        </List>


                        {/* o divider divide o carrinho da opção de limpar,
                            my = margin y, espaçamento em cima e embaixo
                        */}
                        <Divider sx={{ my: 2 }} />

                        {/* fullWidth faz com que o botão ocupe toda a largura, 
                            variant="outlined" define o estilo do botão
                            onClick chama função de limpar, no App.jsx

                        */}
                        <Button
                            fullWidth
                            variant="outlined"
                            color="error"
                            onClick={onClear}
                        >
                            Limpar Carrinho
                        </Button>
                    </>
                )
                }
            </Box >
        </Drawer >
    );
}